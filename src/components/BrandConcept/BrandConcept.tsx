import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
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
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const bulletAnimation = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function BrandConcept() {
  const personalityItems = [
    "Valor, como resultado de um trabalho bem executado e pensado estrategicamente",
    "Solidez, representando segurança, estabilidade e confiança em cada entrega",
    "Crescimento, traduzindo evolução contínua, inovação e visão de futuro",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 pt-20 md:pt-0 md:-mt-8 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="w-full max-w-4xl px-1.5 py-10 text-[#26323f] mb-10"
      >
        {/* CONCEITO */}
        <motion.div
          variants={fadeUp}
          className="mb-12 border-b border-[#22303e]/10 pb-8"
        >
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-5
            "
          >
            Conceito da Marca
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
            "
          >
            A Valora Engenharia foi concebida a partir de um princípio
            central: gerar valor em cada projeto. Seu conceito vai além
            da construção física, refletindo uma visão estratégica onde
            cada detalhe contribui para resultados sólidos, funcionais
            e duradouros.
          </motion.p>
        </motion.div>

        {/* ORIGEM */}
        <motion.div
          variants={fadeUp}
          className="mb-12 border-b border-[#22303e]/10 pb-8"
        >
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
              mb-5
            "
          >
            Origem do Nome “Valora”
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
            "
          >
            O nome “Valora” deriva diretamente da ideia de valor,
            não apenas no sentido financeiro, mas como um conjunto
            de atributos que envolvem qualidade, confiança,
            solidez e relevância.
          </motion.p>
        </motion.div>

        {/* PERSONALIDADE */}
        <motion.div variants={fadeUp}>
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              mb-6
              text-[#22303e]
            "
          >
            Personalidade da Marca
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
              mb-6
            "
          >
            Ele expressa a essência da marca: entregar mais do
            que estruturas, entregar projetos que agregam
            significado, segurança e reconhecimento.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
              mb-8
            "
          >
            A Valora Engenharia se apresenta como uma marca:
          </motion.p>

          <motion.div
            variants={container}
            className="space-y-4"
          >
            {personalityItems.map((item, index) => (
              <motion.div
                key={index}
                variants={bulletAnimation}
                className="
                  flex items-start gap-4
                  rounded-2xl
                  transition-all duration-300
                  hover:translate-x-1
                "
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    w-2 h-2
                    rounded-full
                    bg-[#2e3c48]
                    mt-3 shrink-0
                  "
                />

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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}