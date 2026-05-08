import { motion } from "framer-motion";

interface LogoVariation {
  bg: string;
  src: string;
  alt: string;
}

const logos: LogoVariation[] = [
  {
    bg: "bg-[#22303E]",
    src: "/logo.svg",
    alt: "Valora Logo Dark",
  },
  {
    bg: "bg-[#F5825A]",
    src: "/logo-white.svg",
    alt: "Valora Logo Orange",
  },
  {
    bg: "bg-[#020817]",
    src: "/logo.svg",
    alt: "Valora Logo Black",
  },
];

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
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function LogoShowcase() {
  return (
    <section className="w-full overflow-hidden md:rounded-3xl">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col mt-18 md:mt-0"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover="hover"
            initial={false}
            className={`
              relative
              ${logo.bg}
              w-full h-68
              flex items-center justify-center
              py-14 md:py-20
              px-6
              overflow-hidden
              group
            `}
          >
            {/* Glow */}
            <motion.div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-white/5
                "
              />

              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-32
                  bg-linear-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  blur-2xl
                  rotate-12
                "
              />
            </motion.div>

            {/* Logo */}
            <motion.img
              src={logo.src}
              alt={logo.alt}
              initial={{
                opacity: 0,
                scale: 0.92,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                relative z-10
                w-60 md:w-100
                object-contain
                select-none
                pointer-events-none
                will-change-transform
              "
            />

            {/* Bottom line animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-0 left-0
                h-px
                w-full
                bg-white/10
                origin-left
              "
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
