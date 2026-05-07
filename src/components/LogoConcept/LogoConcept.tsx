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

const sections = [
  {
    title: "Conceito do Logotipo",
    text: `O logotipo da Valora Engenharia foi desenvolvido a partir de uma construção geométrica precisa, refletindo o rigor técnico e a organização que fazem parte da essência da marca.

Sua estrutura segue uma lógica baseada em alinhamentos e proporções bem definidas, evidenciando o cuidado com cada detalhe e o compromisso com a excelência em engenharia.`,
  },
  {
    title: "Significado do Símbolo",
    text: `O elemento de destaque presente no logotipo, composto pelo ponto e pela curva, representa a ideia de valorização e resultado.

O ponto simboliza o objetivo final, o resultado alcançado, enquanto a base curva reforça sustentação e apoio, remetendo à estrutura que dá forma e segurança a cada projeto.

Juntos, esses elementos traduzem a capacidade da Valora de transformar planejamento em entrega concreta e de valor.`,
  },
];

export default function LogoConcept() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-8">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">
        
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.15}
              variants={fadeUp}
            >
              {/* HEADER */}
              <div className="flex items-center gap-4 mb-4">

                <h2
                  className="
                    text-xl md:text-4xl
                    font-semibold
                    tracking-[-0.03em]
                    leading-none
                  "
                >
                  {section.title}
                </h2>
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-6">
                {section.text.split("\n\n").map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1 * (i + 1)}
                    variants={fadeUp}
                    className="
                      text-[17px] md:text-lg
                      leading-relaxed
                      tracking-wide
                      text-[#2e3c48]
                      max-w-4xl
                    "
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}