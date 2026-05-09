import { motion } from "framer-motion";

const smooth = [0.22, 1, 0.36, 1] as const;

export default function LogoGrid() {
  return (
    <section className="w-full md:h-200 bg-[#f5f4f2] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.7,
            ease: smooth,
          }}
          className="
            md:col-span-2
            bg-[#F2F9FC]
            flex items-center justify-center
            px-6 py-40 md:py-20
            will-change-transform
          "
        >
          <motion.img
            src="/logo-grid.webp"
            alt="Valora Grid"
            className="
              w-125 md:w-180
              max-w-4xl
              object-contain
              mt-8
              will-change-transform
            "
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: smooth,
            }}
          />
        </motion.div>

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.75,
            ease: smooth,
          }}
          className="
            relative
            h-80 md:h-125
            overflow-hidden
            will-change-transform
          "
        >
          <motion.img
            src="/images/logo-img.webp"
            alt="Building"
            className="
              w-full h-full
              object-cover
              will-change-transform
            "
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.45,
              ease: smooth,
            }}
          />

          {/* LOGO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="/logo-orange.svg"
              alt="Valora Symbol"
              className="
                w-28 md:w-44
                md:-mt-16
                will-change-transform
              "
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: smooth,
              }}
              whileHover={{
                scale: 1.04,
              }}
            />
          </div>
        </motion.div>

        {/* RIGHT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.75,
            ease: smooth,
          }}
          className="
            bg-[#22303e]
            h-80 md:h-125
            flex items-center justify-center
            relative
            overflow-hidden
            will-change-transform
          "
        >
          <div className="relative">
            {/* ICON */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: smooth,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="
                w-28 h-28
                md:w-36 md:h-36
                rounded-4xl
                bg-[#f48157]
                md:-mt-16
                flex items-center justify-center
                shadow-2xl
                will-change-transform
              "
            >
              <motion.img
                src="/white-logo.svg"
                alt="Valora App"
                className="
                  w-14 md:w-20
                  ml-3
                  will-change-transform
                "
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* NOTIFICATION */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.3,
                ease: smooth,
              }}
              animate={{
                scale: [1, 1.04, 1],
              }}
              className="
                absolute
                -top-2 -right-2
                md:-mt-16
                w-9 h-9
                rounded-full
                bg-red-500
                flex items-center justify-center
                text-white text-sm font-semibold
                shadow-lg
                will-change-transform
              "
            >
              6
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}