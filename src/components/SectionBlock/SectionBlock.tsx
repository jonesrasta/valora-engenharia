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
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
      className={`w-full max-w-4xl py-10 p-3 text-[#22303E] ${className}`}
    >
      {/* TITLE */}
      {title && (
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(2.5px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.4 },
            },
          }}
          className={`
            text-[23px] md:text-4xl font-semibold mb-6 pt-8 md:py-6 py-3.5
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
            flex flex-col gap-4
            text-[17px] md:text-lg leading-relaxed
            ${textClassName}
          `}
        >
          {texts.map((text, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(2.5px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.4 },
                },
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      )}

      {/* CUSTOM CONTENT */}
      {children && (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.4 } },
          }}
          className="mt-6"
        >
          {children}
        </motion.div>
      )}
    </motion.section>
  );
}