import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const diferencials = [
  "Excelência técnica aplicada em todas as etapas",
  "Precisão e planejamento estratégico, reduzindo riscos e otimizando resultados",
  "Alto padrão de qualidade, do conceito à entrega final",
  "Compromisso com prazos e transparência nos processos",
  "Atenção aos detalhes, garantindo soluções completas e bem executadas",
];

const perception = [
  "Sólida e confiável, que transmite segurança em cada projeto",
  "Sofisticada, alinhada a um padrão elevado de qualidade",
  "Técnica e eficiente, com domínio e precisão na execução",
  "Estratégica, que agrega valor real aos projetos",
  "Referência em engenharia de alto padrão",
];

export default function BrandDifferentials() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-8">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">
        <div className="space-y-24">

          {/* DIFERENCIAIS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-[#22303e] text-xl md:text-4xl font-semibold tracking-tight mb-8">
              Diferenciais
            </h2>

            <p className="max-w-4xl text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide mb-10">
              A Valora Engenharia se destaca por:
            </p>

            <div className="space-y-5">
              {diferencials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0" />

                  <p className="text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PERCEPÇÃO DA MARCA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            variants={fadeUp}
          >
            <h2 className="text-[#22303e] text-xl md:text-4xl font-semibold tracking-tight mb-8">
              Como a marca quer ser percebida
            </h2>

            <p className="max-w-4xl text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide mb-10">
              A Valora Engenharia busca ser reconhecida como uma marca:
            </p>

            <div className="space-y-5">
              {perception.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0" />

                  <p className="text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}