import { motion } from "framer-motion";

export default function TypographyShowcase() {
  return (
    <div className="w-full min-h-screen bg-[#ececec] flex items-center justify-center p-6 md:p-12">
      <div className="w-200 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between h-full"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-semibold text-[#22303e] mb-10">
            Neue Metana
          </h1>

          {/* Regular / Bold */}
          <div className="mt-auto">
            <p className="text-xl md:text-3xl text-[#22303e] font-normal leading-tight">
              Regular
            </p>
            <p className="text-xl md:text-3xl text-[#22303e] font-bold leading-tight">
              Bold
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between h-full"
        >
          {/* Alphabet */}
          <div className="text-[#22303e] text-lg md:text-2xl tracking-wide leading-relaxed">
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>opqrstuvwxyz</p>
            <p>1234567890</p>
          </div>

          {/* Big ABC */}
          <div className="mt-10 md:mt-40 md:-ml-24">
            <h2 className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-bold text-[#26323f] leading-none">
              Abc
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}