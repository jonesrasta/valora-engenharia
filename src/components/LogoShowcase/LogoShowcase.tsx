import { LazyMotion, domAnimation, m } from "framer-motion";

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
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function LogoShowcase() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full overflow-hidden md:rounded-3xl">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col mt-18 md:mt-0"
        >
          {logos.map((logo, index) => (
            <m.div
              key={index}
              variants={item}
              className={`
                relative
                ${logo.bg}
                flex
                h-72
                w-full
                items-center
                justify-center
                overflow-hidden
                px-6
                py-14
                md:h-68
                md:py-20
                group
                will-change-transform
              `}
            >
              {/* Glow leve */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-white/5
                  "
                />

                <div
                  className="
                    absolute
                    inset-y-0
                    -left-32
                    w-24
                    rotate-12
                    bg-white/10
                    blur-xl
                    transition-transform
                    duration-[1800ms]
                    ease-linear
                    group-hover:translate-x-[140vw]
                  "
                />
              </div>

              {/* Logo */}
              <m.img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.96,
                  },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  z-10
                  w-60
                  object-contain
                  select-none
                  pointer-events-none
                  will-change-transform
                  md:w-100
                "
              />

              {/* Linha inferior */}
              <m.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-white/10
                "
              />
            </m.div>
          ))}
        </m.div>
      </section>
    </LazyMotion>
  );
}