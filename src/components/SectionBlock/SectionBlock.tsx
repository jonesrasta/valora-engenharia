import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  title?: string;
  texts?: string[];
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  children?: ReactNode;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(2.5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4 },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export default function SectionBlock({
  title,
  texts,
  className = "",
  titleClassName = "",
  textClassName = "",
  children,
}: Props) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className={`w-full max-w-4xl px-3 py-10 text-[#22303E] ${className}`}
    >
      {/* TITLE */}
      {title && (
        <motion.h2
          variants={item}
          className={`
            text-xl md:text-4xl font-semibold mb-6 pt-8 md:py-6 py-3.5
            ${titleClassName}
          `}
        >
          {title}
        </motion.h2>
      )}

      {/* TEXTS */}
      {texts && (
        <div
          className={`
            flex flex-col gap-4 mb-6
            text-[17px] md:text-lg leading-relaxed
            ${textClassName}
          `}
        >
          {texts.map((text, i) => (
            <motion.p key={`${text}-${i}`} variants={item}>
              {text}
            </motion.p>
          ))}
        </div>
      )}

      {/* CUSTOM CONTENT */}
      {children && (
        <motion.div variants={fade} className="mt-6">
          {children}
        </motion.div>
      )}
    </motion.section>
  );
}