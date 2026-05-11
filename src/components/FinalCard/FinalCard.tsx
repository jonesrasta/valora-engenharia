import { motion } from "framer-motion";
import logo from "../../../public/logo.svg";

const smooth = [0.22, 1, 0.36, 1] as const;

export default function FinalCard() {
  return (
    <section
      className="
        w-full
        h-screen
        bg-[#22303e]
        flex items-center justify-center
        overflow-hidden md:h-200
        px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: smooth,
        }}
        className="
          flex flex-col
          items-center justify-center
          text-center
        "
      >
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Valora"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: smooth,
          }}
          className="
            w-64 md:w-md
            object-contain
            select-none
            pointer-events-none
            mb-8
          "
        />

        {/* FRASE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: smooth,
          }}
          className="
            text-xl md:text-2xl
            font-bold
            tracking-wide
            leading-8
            max-w-100
          "
        >
          <span className="text-[#F2F9FC]">
            Onde cada detalhe
          </span>{" "}
          <span className="text-[#F98058]">
            constrói valor.
          </span>
        </motion.p>

        {/* LINHA
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: smooth,
          }}
          className="
            h-px
            bg-[#F98058]
            mt-8
            rounded-full
          "
        /> */}
      </motion.div>
    </section>
  );
}