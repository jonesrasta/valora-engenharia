import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function BrandEssence() {
  const personality = [
    "Sofisticada, pela atenção aos detalhes e padrão elevado",
    "Técnica, pela precisão e domínio da engenharia",
    "Confiável, pela consistência e responsabilidade em cada entrega",
    "Estratégica, pela visão inteligente aplicada a cada projeto",
    "Sólida, pela segurança que transmite em todas as suas soluções",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 pt-20 md:pt-0 md:-mt-14 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full max-w-4xl px-1.5 py-10 text-[#26323f] mb-10"
      >
        {/* ESSÊNCIA */}
        <motion.div variants={fadeUp} className="mb-10">
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
            "
          >
            Essência da Marca
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
            "
          >
            A essência da Valora Engenharia está na busca constante pela
            excelência, na precisão dos detalhes e na capacidade de transformar
            ideias em projetos sólidos e valiosos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-10 md:mb-6 border-b border-[#26323f]/10 md:pb-2 pb-8"
          />
        </motion.div>

        {/* PROPÓSITO */}
        <motion.div variants={fadeUp} className="mb-10">
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
            "
          >
            Propósito
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
            "
          >
            Gerar valor por meio da engenharia, desenvolvendo projetos que unem
            qualidade, eficiência e visão estratégica, contribuindo para
            construções seguras, duradouras e de alto padrão.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-10 md:mb-6 border-b border-[#26323f]/10 md:pb-2 pb-8"
          />
        </motion.div>

        {/* PERSONALIDADE */}
        <motion.div variants={fadeUp}>
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
            "
          >
            Personalidade da Marca
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              mb-14
            "
          >
            A Valora Engenharia se apresenta como uma marca:
          </motion.p>

          <motion.div variants={container} className="space-y-3">
            {personality.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0"
                />

                <p className="text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
