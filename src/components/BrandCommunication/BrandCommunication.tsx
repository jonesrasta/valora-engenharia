import { motion } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const listItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: smoothEase,
    },
  }),
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: smoothEase,
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
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-14 pt-28 md:pt-6 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={container}
        className="w-full max-w-5xl px-1.5 text-[#26323f]"
      >
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          className="mb-6"
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

        {/* COMMUNICATION LIST */}
        <motion.div
          variants={container}
          className="space-y-4 mb-8"
        >
          {communicationItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={listItem}
              whileHover={{
                x: 2,
                transition: {
                  duration: 0.2,
                },
              }}
              className="flex items-start gap-4"
            >
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mb-10 border-b border-[#26323f]/10 pb-2"
        />

        {/* EXAMPLES */}
        <motion.div
          variants={fadeUp}
          className="mb-16"
        >
          <motion.h3
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-8
            "
          >
            Exemplo de Aplicação
          </motion.h3>

          <motion.div
            variants={container}
            className="space-y-4"
          >
            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -3,
                transition: {
                  duration: 0.2,
                },
              }}
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
              whileHover={{
                y: -3,
                transition: {
                  duration: 0.2,
                },
              }}
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
          </motion.div>
        </motion.div>

        {/* AVOID */}
        <motion.div variants={fadeUp}>
          <motion.h3
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-6
            "
          >
            Evitar
          </motion.h3>

          <motion.div
            variants={container}
            className="space-y-4 mb-6"
          >
            {avoidItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{
                  y: -2,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  rounded-2xl
                  border border-[#22303e]/10
                  p-5 md:p-6
                  bg-[#F2F9FC]
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