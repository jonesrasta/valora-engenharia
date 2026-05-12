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

const voiceItems = [
  {
    title: "Formal, mas acessível.",
    text: "A comunicação é profissional e bem construída, sem ser distante ou excessivamente complexa.",
  },
  {
    title: "Técnico, mas claro.",
    text: "Utiliza conhecimento da engenharia, traduzido de forma compreensível e direta.",
  },
  {
    title: "Sofisticado, sem exageros.",
    text: "Evita excessos e mantém elegância através da simplicidade e precisão.",
  },
  {
    title: "Seguro e objetivo.",
    text: "Transmite confiança por meio de mensagens firmes, claras e consistentes.",
  },
  {
    title: "Estratégico.",
    text: "Cada comunicação tem propósito, reforçando o valor e o posicionamento da marca.",
  },
];

export default function BrandVoice() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-28 md:pt-0">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full max-w-5xl px-1.5 text-[#26323f]"
      >
        {/* HEADER */}
        <motion.div variants={fadeUp} className="mb-10">
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
            Tom de Voz da Marca
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-4xl
              text-[17px] md:text-xl
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
              mb-6
            "
          >
            O tom de voz da Valora Engenharia reflete seu posicionamento de alto
            padrão, unindo clareza, autoridade e sofisticação na comunicação.
          </motion.p>

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
            A forma como a marca se expressa deve transmitir segurança,
            conhecimento técnico e confiança, mantendo sempre uma comunicação
            objetiva e bem estruturada.
          </motion.p>
          <div className="mb-10 border-b border-[#26323f]/10 pb-6"></div>
        </motion.div>

        {/* SUBTITLE */}
        <motion.div variants={fadeUp} className="mb-10">
          <h3
            className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#22303e]
            "
          >
            Características do Tom de Voz
          </h3>

          <p
            className="
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
              mt-4
            "
          >
            A Valora Engenharia busca ser reconhecida como uma marca:
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {voiceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="
        rounded-3xl
        border border-[#22303e]/10
        bg-[#F2F9FC]
        p-6 md:p-8
        backdrop-blur-sm
      "
            >
              <h4
                className="
          text-lg md:text-xl
          font-semibold
          text-[#22303e]
          mb-4
        "
              >
                {item.title}
              </h4>

              <p
                className="
          text-[16px] md:text-lg
          leading-relaxed
          tracking-wide
          text-[#2e3c48]
        "
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
