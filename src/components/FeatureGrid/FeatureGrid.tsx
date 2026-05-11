import { motion, type Variants } from "framer-motion";

import logoDark from "../../../public/logo.svg";
import logoLight from "../../../public/white-logo.svg";
import iconDark from "../../../public/logo-color.svg";
import iconLight from "../../../public/logo-white.svg";

const cards = [
  {
    id: 1,
    bg: "#22303E",
    image: logoDark,
    alt: "Valora Dark Logo",

    cardClass:
      "rounded-[2rem] md:rounded-[2.5rem] aspect-square p-10",

    imageClass:
      "max-w-[200px]",

    hover: {
      y: -10,
      scale: 1.03,
    },
  },

  {
    id: 2,
    bg: "#F98058",
    image: logoLight,
    alt: "Valora Light Logo",

    cardClass:
      "rounded-[2rem] aspect-square",

    imageClass:
      "max-w-[100px] ml-4",

    hover: {
      y: -14,
      scale: 1.05,
    },
  },

  {
    id: 3,
    bg: "#F98058",
    image: iconLight,
    alt: "Valora Light Icon",

    cardClass:
      "rounded-[2rem] aspect-square p-16",

    imageClass:
      "max-w-[200px]",

    hover: {
      rotate: -2,
      scale: 1.04,
    },
  },

  {
    id: 4,
    bg: "#22303E",
    image: iconDark,
    alt: "Valora Dark Icon",

    cardClass:
      "rounded-[2rem] aspect-square p-14 md:mb-0 mb-20",

    imageClass:
      "max-w-[100px] ml-4",

    hover: {
      rotate: 2,
      scale: 1.04,
    },
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function BrandGrid() {
  return (
    <section className="w-full bg-[#101820] min-h-screen md:min-h-200 px-6 pt-28 md:pt-10 justify-center items-center flex">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
  mx-auto
  grid
  max-w-180
  grid-cols-1
  gap-8
  md:grid-cols-2
"
      >
{cards.map((card) => (
  <motion.div
    key={card.id}
    variants={item}
    whileHover={card.hover}
    transition={{
      type: "spring",
      stiffness: 220,
      damping: 18,
    }}
    className={`
      group
      relative
      overflow-hidden
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      ${card.cardClass}
    `}
    style={{
      backgroundColor: card.bg,
    }}
  >
    <div
      className="
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
          bg-linear-to-br
          from-white/10
          to-transparent
        "
      />
    </div>

    <div className="flex h-full w-full items-center justify-center">
      <img
        src={card.image}
        alt={card.alt}
        className={`
          w-full
          object-contain
          select-none
          pointer-events-none
          ${card.imageClass}
        `}
      />
    </div>
  </motion.div>
))}
      </motion.div>
    </section>
  );
}
