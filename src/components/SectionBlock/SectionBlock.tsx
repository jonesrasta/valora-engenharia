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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-4xl py-10 p-3 text-[#26323f] ${className}`}
    >
      {/* TITLE */}
      {title && (
        <h2
          className={`
            text-[22px] md:text-4xl font-semibold mb-6 pt-8 md:py-6 py-4
            ${titleClassName}
          `}
        >
          {title}
        </h2>
      )}

      {/* TEXTS */}
      {texts && (
        <div
          className={`
            flex flex-col gap-4
            text-sm md:text-lg leading-relaxed
            ${textClassName}
          `}
        >
          {texts.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      )}

      {/* CUSTOM CONTENT */}
      {children && <div className="mt-6">{children}</div>}
    </motion.section>
  );
}