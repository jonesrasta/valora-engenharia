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

const smoothReveal = {
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

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function TypographyShowcase() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full h-200 flex items-center justify-center p-6 md:p-12"
    >
      <div className="w-full max-w-300">
        {/* MOBILE LAYOUT (EXATO DO DESIGN) */}
        <div className="flex flex-col md:hidden">
          <motion.h1
            variants={smoothReveal}
            className="text-4xl font-semibold text-[#22303e] mb-8 py-8"
          >
            Neue Metana
          </motion.h1>

          {/* Alphabet */}
          <motion.div
            variants={smoothReveal}
            className="flex flex-col items-end text-[#22303e] text-2xl tracking-wide leading-6 mb-16 [&_p]:no-underline"
          >
            <p>abcdefghijklmn</p>

            <span>
              opqrstuvwxyz
              <span className="text-zinc-200">..</span>

              <p>1234567890</p>
            </span>
          </motion.div>

          {/* Regular / Bold */}
          <motion.div
            variants={smoothReveal}
            className="flex gap-2"
          >
            <div className="mb-16 mt-10">
              <p className="text-lg text-[#22303e] font-normal leading-tight">
                Regular
              </p>

              <p className="text-lg text-[#22303e] font-bold leading-tight">
                Bold
              </p>
            </div>

            {/* Big ABC */}
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-[100px] font-bold text-[#26323f] leading-none"
            >
              Abc
            </motion.h2>
          </motion.div>
        </div>

        {/* DESKTOP (SEU CÓDIGO ORIGINAL INTACTO) */}
        <div className="hidden md:grid grid-cols-2 gap-4 items-center w-full -mt-14">
          {/* LEFT */}
          <motion.div
            variants={slideLeft}
            className="flex flex-col justify-between h-full"
          >
            <motion.h1
              variants={smoothReveal}
              className="text-[44px] font-semibold text-[#22303e] mb-10"
            >
              Neue Metana
            </motion.h1>

            <motion.div
              variants={smoothReveal}
              className="mt-auto"
            >
              <p className="text-3xl text-[#22303e] font-normal leading-tight">
                Regular
              </p>

              <p className="text-3xl text-[#22303e] font-bold leading-tight">
                Bold
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={slideRight}
            className="flex flex-col justify-between h-full"
          >
            <motion.div
              variants={smoothReveal}
              className="text-[#22303e] text-3xl tracking-wide leading-8 mt-24"
            >
              <p>abcdefghijklmn</p>
              <p>opqrstuvwxyz</p>
              <p>1234567890</p>
            </motion.div>

            <div className="mt-40 md:-ml-24">
              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  y: 30,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="text-[200px] font-bold text-[#26323f] leading-none"
              >
                Abc
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}