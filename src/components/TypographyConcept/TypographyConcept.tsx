import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function TypographySection() {
  return (
    <section className="w-full md:h-200 flex items-center justify-center px-2 py-10 pt-24 md:pt-0">
      <div className="w-full max-w-4xl px-1.5 py-4 text-[#26323f]">
        {/* TITLE */}
        <div className="mb-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="
            text-2xl md:text-3xl
            font-semibold
            tracking-tight
            mb-14 py-2
          "
          >
            Tipografia
          </motion.h2>

          {/* INTRO */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
            className="
            max-w-4xl
            text-[17px] md:text-lg
            leading-relaxed
            tracking-wide
          "
          >
            A tipografia da Valora Engenharia foi selecionada para refletir
            precisão, sofisticação e clareza, reforçando o posicionamento da
            marca no segmento de alto padrão. Seu uso garante consistência
            visual e contribui para uma comunicação elegante, técnica e
            objetiva.
          </motion.p>
          <div className="mb-6 border-b border-[#26323f]/10 md:pb-8 pb-4"></div>
        </div>
        {/* PRIMARY */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="mb-4">
            <h3
              className="
              text-lg md:text-xl
              font-semibold
              
            "
            >
              Fonte Primaria
            </h3>

            <h4
              className="
              text-2xl md:text-3xl
              font-semibold
              mb-2
            "
            >
              Neue Metana
            </h4>
            <p
              className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-[1.35]
              tracking-wide
            "
            >
              Utilizada em títulos e destaques, a fonte principal transmite
              presença, modernidade e autoridade. Seu desenho limpo e
              estruturado reforça a identidade sólida e contemporânea da marca.
            </p>
          </div>
          <div className="mb-6 border-b border-[#26323f]/10 md:pb-2 pb-4"></div>
        </motion.div>

        {/* SECONDARY */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeUp}
        >
          <h3
            className="
              text-lg md:text-xl
              font-semibold
              mb-4
            "
          >
            Fonte Secundária
          </h3>

          <h4
            className="
              text-xl md:text-4xl
              font-semibold
              mb-2
            "
          >
            Mortane
          </h4>

          <p
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-[1.35]
              tracking-wide
            "
          >
            Indicada para textos de apoio e materiais institucionais, a fonte
            secundária complementa a comunicação com legibilidade e equilíbrio,
            mantendo a harmonia visual em diferentes aplicações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
