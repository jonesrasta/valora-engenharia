import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
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

export default function Conclusion() {
  return (
    <section
      className="
        w-full
        min-h-screen
        flex items-center justify-center
        px-2
        pt-20 md:pt-0 md:-mt-16
        overflow-hidden
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          w-full
          max-w-4xl
          px-1.5
          py-10
          text-[#26323f]
          mb-10
        "
      >
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          className="
            mb-12
            border-b border-[#22303e]/10
            pb-8
          "
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
            Conclusão
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
            A Valora Engenharia se posiciona como mais do que
            uma empresa de engenharia, é uma marca que traduz
            excelência, confiança e geração de valor em cada projeto.
          </motion.p>

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
            Este branding reflete um compromisso sólido com
            qualidade, precisão e inovação, garantindo que
            cada detalhe comunique profissionalismo e
            credibilidade.
          </motion.p>

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
            Mais do que construir estruturas, construímos
            relações, experiências e resultados que permanecem
            ao longo do tempo.
          </motion.p>
        </motion.div>

        {/* FRASE FINAL */}
        <motion.div
          variants={fadeUp}
          className="
            flex flex-col
            items-start
            gap-4
          "
        >
          <motion.span
            variants={fadeUp}
            className="
              text-[#ACB9BF]
              uppercase
              tracking-[0.22em]
              text-sm
            "
          >
            Valora Engenharia
          </motion.span>

          <motion.h3
            variants={fadeUp}
            className="
              text-2xl md:text-3xl
              leading-tight
              tracking-tight
              font-semibold
              max-w-3xl
            "
          >
            <span className="text-[#22303e]">
            "É sobre transformar
            </span>{" "}
            <span className="text-[#F98058]">
              visão em valor."
            </span>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="
              text-[17px] md:text-xl
              leading-relaxed
              tracking-wide
              text-[#22303E]
              max-w-2xl
            "
          >
            Valora é sobre enxergar além do projeto.
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{
              width: 120,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              h-1
              bg-[#F98058]
              mt-2
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}