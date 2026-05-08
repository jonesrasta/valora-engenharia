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

const colors = [
  {
    name: "Orange Earth",
    hex: "#F5825A",
    description: "Representa valor, destaque e energia estratégica",
  },
  {
    name: "Off-Black",
    hex: "#020817",
    description: "Transmite sofisticação, força e autoridade",
  },
  {
    name: "French Gray",
    hex: "#ACB9BF",
    description: "Equilíbrio e neutralidade",
  },
  {
    name: "Gunmetal",
    hex: "#22303E",
    description: "Profundidade e estabilidade",
  },
  {
    name: "Alice Blue",
    hex: "#F2F9FC",
    description: "Leveza e contraste",
  },
];

export default function ColorPaletteConcept() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-8">
      <div className="w-full max-w-5xl px-1.5 md:px-8 py-10 text-[#26323f]">
        {/* TITLE */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="
            text-lg md:text-4xl
            font-semibold
            tracking-tight
            mb-8 md:mb-10
            leading-none
          "
        >
          Paleta de Cores
        </motion.h2>

        {/* INTRO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="space-y-5 md:space-y-7 mb-14 md:mb-20"
        >
          <p
            className="
              max-w-230
              text-[17px] md:text-lg
              leading-[1.18]
              tracking-wide
            "
          >
            A paleta de cores da Valora Engenharia foi desenvolvida para
            transmitir sofisticação, solidez e equilíbrio visual, reforçando seu
            posicionamento no segmento de alto padrão.
          </p>

          <p
            className="
              max-w-230
              text-[17px] md:text-lg
              leading-[1.18]
              tracking-wide
            "
          >
            A combinação entre tons escuros e neutros com um ponto de destaque
            cria uma identidade forte, elegante e contemporânea.
          </p>
        </motion.div>

        {/* COLORS */}
        <div className="space-y-6 md:space-y-8">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15 + index * 0.08}
              variants={fadeUp}
              className="
                flex flex-col
                md:grid md:grid-cols-[320px_1fr]
                md:items-start
                gap-6 md:gap-10
              "
            >
              {/* LEFT */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    w-14 h-14 md:w-16 md:h-16
                    rounded-2xl
                    shadow-md
                    border border-black/5
                    shrink-0
                  "
                  style={{ backgroundColor: color.hex }}
                />

                <div>
                  <h3
                    className="
                      text-lg md:text-xl
                      font-semibold
                      leading-none
                      mb-2
                    "
                  >
                    {color.name}
                  </h3>

                  <span
                    className="
                      text-sm md:text-lg
                      uppercase
                      tracking-[0.22em]
                      text-[#22303e]/45
                    "
                  >
                    {color.hex}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <p
                className="
                  text-[17px] md:text-lg
                  leading-[1.18]
                  tracking-wide
                  text-[#2e3c48]
                  md:max-w-155
                  md:pt-1
                "
              >
                {color.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
