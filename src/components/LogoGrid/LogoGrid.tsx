import { motion } from "framer-motion";

export default function LogoGrid() {
  return (
    <section className="w-full bg-[#f5f4f2] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-[#F2F9FC] flex items-center justify-center px-6 py-40 md:py-20"
        >
          <motion.img
            src="/logo-grid.webp"
            alt="Valora Grid"
            className="w-125 md:w-180 max-w-4xl object-contain mt-8"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-80 md:h-125 overflow-hidden"
        >
          <motion.img
            src="/images/logo-img.webp"
            alt="Building"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />

          {/* LOGO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="/logo-orange.svg"
              alt="Valora Symbol"
              className="w-28 md:w-44 md:-mt-16"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: 4,
              }}
            />
          </div>
        </motion.div>

        {/* RIGHT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#22303e] h-80 md:h-125 flex items-center justify-center relative"
        >
          <div className="relative">
            {/* ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-4xl bg-[#f48157] md:-mt-16 flex items-center justify-center shadow-2xl"
            >
              <motion.img
                src="/white-logo.svg"
                alt="Valora App"
                className="w-14 md:w-20 ml-3"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* NOTIFICATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 300,
              }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.08, 1],
              }}
              className="absolute -top-2 -right-2 w-9 h-9 rounded-full md:-mt-16 bg-red-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg"
            >
              6
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
