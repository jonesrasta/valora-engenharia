import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function MissionVisionValues() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-14">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="w-full max-w-4xl px-1.5 py-10 text-[#26323f] mb-8"
      >
        {/* MISSÃO */}
        <motion.div
          variants={item}
          className="mb-10 border-b border-[#26323f]/10 pb-8"
        >
          <motion.h2
            variants={item}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              mb-5
            "
          >
            Missão
          </motion.h2>

          <motion.p
            variants={item}
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              font-normal
              text-[#4b5563]
            "
          >
            Desenvolver soluções em engenharia com excelência técnica e visão
            estratégica, unindo qualidade, inovação e eficiência para entregar
            projetos que gerem valor real e duradouro.
          </motion.p>
        </motion.div>

        {/* VISÃO */}
        <motion.div
          variants={item}
          className="mb-10 border-b border-[#26323f]/10 pb-8"
        >
          <motion.h2
            variants={item}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              mb-5
            "
          >
            Visão
          </motion.h2>

          <motion.p
            variants={item}
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              font-normal
              text-[#4b5563]
            "
          >
            Ser reconhecida como referência em engenharia de alto padrão,
            destacando-se pela qualidade das entregas, inovação nos processos e
            pela capacidade de transformar projetos em resultados sólidos e
            confiáveis.
          </motion.p>
        </motion.div>

        {/* VALORES */}
        <motion.div variants={item}>
          <motion.h2
            variants={item}
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              mb-5
            "
          >
            Valores
          </motion.h2>

          <motion.p
            variants={item}
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              font-normal
              text-[#4b5563]
            "
          >
            Compromisso, qualidade, inovação e transparência são a base do nosso
            trabalho. Acreditamos que cada projeto deve refletir precisão,
            responsabilidade e foco no cliente, construindo relações de
            confiança e resultados consistentes.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
