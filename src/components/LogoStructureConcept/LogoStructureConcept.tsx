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

const principles = [
  "Precisão técnica",
  "Organização estrutural",
  "Clareza e eficiência",
];

const meanings = [
  "Estrutura, através da construção geométrica e alinhamento rigoroso",
  "Precisão, evidenciada pelo uso de grid e proporção",
  "Estabilidade, por meio do equilíbrio visual",
  "Sofisticação, com um design minimalista e contemporâneo",
  "Valor, simbolizado pelo ponto de destaque e pela composição estratégica",
];

export default function LogoStructureConcept() {
  return (
    <section className="w-full md:h-200 flex items-center justify-center px-2 py-10 pt-24 md:pt-0">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">
        <div className="space-y-10">
          {/* IDEIA DAS FORMAS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-2">
              <h2
                className="
                  text-2xl md:text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  leading-none
                "
              >
                Ideia por trás das Formas
              </h2>
            </div>

            <div className="space-y-8">
              <p
                className="
                  text-[17px] md:text-lg
                  leading-relaxed
                  tracking-wide
                  text-[#2e3c48]
                  max-w-4xl
                "
              >
                A construção do logotipo é baseada em um grid técnico, que
                garante equilíbrio visual, alinhamento e proporção, princípios
                fundamentais da engenharia.
              </p>

              <p
                className="
                  text-[17px] md:text-lg
                  leading-relaxed
                  tracking-wide
                  text-[#2e3c48]
                "
              >
                As linhas retas e formas limpas transmitem:
              </p>
              <div className="space-y-2">
                {principles.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0" />

                    <p
                      className="
                        text-[#2e3c48]
                        text-[17px] md:text-lg
                        leading-relaxed
                        tracking-wide
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
                <div className="mb-6 border-b border-[#26323f]/10 md:pb-2 pb-6"></div>
              </div>
            </div>
          </motion.div>

          {/* SIGNIFICADO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-2">
              <h2
                className="
                  text-2xl md:text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  leading-none
                "
              >
                Significado do Símbolo
              </h2>
            </div>

            <p
              className="
                text-[17px] md:text-lg
                leading-relaxed
                tracking-wide
                text-[#2e3c48]
                mb-8
                max-w-4xl
              "
            >
              O logotipo da Valora Engenharia comunica:
            </p>

            <div className="space-y-2">
              {meanings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0" />

                  <p
                    className="
                      text-[#2e3c48]
                      text-[17px] md:text-lg
                      leading-relaxed
                      tracking-wide
                    "
                  >
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
