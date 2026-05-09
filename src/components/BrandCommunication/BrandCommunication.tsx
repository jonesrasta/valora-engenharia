import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const communicationItems = [
  "Direta e profissional",
  "Clara e bem estruturada",
  "Confiante, sem ser arrogante",
  "Informativa, sem ser excessivamente técnica",
  "Elegante e consistente",
];

const avoidItems = [
  "Linguagem informal ou exagerada",
  "Gírias ou expressões populares",
  "Promessas genéricas sem fundamento",
];

export default function BrandCommunication() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-14 pt-32 md:pt-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full max-w-5xl px-1.5 text-[#26323f]"
      >
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          className="mb-4"
        >
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-6
            "
          >
            Como a Marca se Comunica
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-4xl
              text-[17px] md:text-xl
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
            "
          >
            A Valora Engenharia se comunica de forma:
          </motion.p>
        </motion.div>

        {/* COMMUNICATION GRID */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {communicationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="
                rounded-3xl
              "
            >
                
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#22303e] mt-3 shrink-0" />

                <p
                  className="
                    text-[17px] md:text-lg
                    leading-relaxed
                    tracking-wide
                    text-[#2e3c48]
                  "
                >
                  {item}
                </p>
                
              </div>
              
            </motion.div>
          ))}
        </motion.div>

        {/* EXAMPLES */}
        <motion.div
          variants={fadeUp}
          className="mb-16"
        >
            <div className="mb-10 border-b border-[#26323f]/10 pb-2"></div>
          <h3
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-8
            "
          >
            Exemplo de Aplicação
          </h3>

          <div className="space-y-4">
            <motion.div
              variants={cardAnimation}
              className="
                rounded-3xl
                bg-[#22303e]
                text-[#f2f9fc]
                p-6 md:p-8
              "
            >
              <p
                className="
                  text-[17px] md:text-xl
                  leading-relaxed
                  tracking-wide
                "
              >
                “Desenvolvemos soluções com precisão e alto padrão
                para garantir resultados sólidos.”
              </p>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              className="
                rounded-3xl
                bg-[#22303e]
                text-[#f2f9fc]
                p-6 md:p-8
              "
            >
              <p
                className="
                  text-[17px] md:text-xl
                  leading-relaxed
                  tracking-wide
                "
              >
                “Cada projeto é conduzido com planejamento estratégico
                e excelência técnica.”
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* AVOID */}
        <motion.div variants={fadeUp}>
          <h3
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-8
            "
          >
            Evitar
          </h3>

          <motion.div
            variants={container}
            className="space-y-4"
          >
            {avoidItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className="
                  rounded-2xl
                  border border-[#22303e]/10
                  p-5 md:p-6
                  bg-white
                "
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#F98058] mt-3 shrink-0" />

                  <p
                    className="
                      text-[17px] md:text-lg
                      leading-relaxed
                      tracking-wide
                      text-[#2e3c48]
                    "
                  >
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}