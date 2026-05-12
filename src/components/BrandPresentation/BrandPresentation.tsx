import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const paragraphs = [
  "A Valora Engenharia nasce com o propósito de transformar projetos em valor real. Atuando com excelência técnica e visão estratégica, a empresa se destaca pela capacidade de unir engenharia, precisão e alto padrão em cada entrega.",

  "Mais do que construir, a Valora desenvolve soluções inteligentes e bem estruturadas, pensadas para atender às demandas de um mercado exigente, onde qualidade, confiança e atenção aos detalhes são indispensáveis.",

  "Com um posicionamento sólido e contemporâneo, a marca reflete sofisticação, segurança e credibilidade. Cada projeto é conduzido com rigor técnico e compromisso, garantindo resultados consistentes e duradouros.",

  "Valora Engenharia é sinônimo de construir com propósito, elevar padrões e entregar valor em cada detalhe.",
];

export default function BrandPresentation() {
  return (
    <section className="w-full md:h-200 flex items-center justify-center px-2 py-10 pt-20 md:pt-0">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-4 mb-4"
        >
          <h2
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-[-0.03em]
              leading-none
            "
          >
            Apresentação da Marca
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col gap-8">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12 * (index + 1)}
              variants={fadeUp}
              className="
                text-[17px] md:text-xl
                leading-relaxed
                tracking-wide
                text-[#2e3c48]
                max-w-4xl
              "
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
