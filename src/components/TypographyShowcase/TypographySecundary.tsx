
import { motion } from "framer-motion";

export default function TypographyShowcase() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 md:p-12 font-[Mortane]">
      <div className="w-full max-w-300">
        {/* MOBILE LAYOUT (EXATO DO DESIGN) */}
        <div className="flex flex-col md:hidden">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-semibold text-[#22303e] mb-8 py-8"
          >
            Mortane
          </motion.h1>

          {/* Alphabet */}
          <div className="text-[#22303e] text-2xl tracking-wide leading-relaxed mb-16 [&_p]:no-underline">
            <p>abcdefghijklmnopqrstuvwxyz</p>
            {/* <p>opqrstuvwxyz</p> */}
            {/* <p>1234567890</p> */}
          </div>

          {/* Regular / Bold */}
          <div className="flex gap-2">
            <div className="mb-16 mt-20">
              <p className="text-2xl text-[#22303e] font-normal leading-tight">
                Regular
              </p>
              {/* <p className="text-lg text-[#22303e] font-bold leading-tight">
                Bold
              </p> */}
            </div>
            {/* Big ABC */}
            <h2 className="text-[150px] font-bold text-[#26323f] leading-none pl-4">
              Abc
            </h2>
          </div>
        </div>

        {/* DESKTOP (SEU CÓDIGO ORIGINAL INTACTO) */}
        <div className="hidden md:grid grid-cols-2 gap-4 items-center w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between h-full"
          >
            <h1 className="text-6xl font-semibold text-[#22303e] mb-10">
              Mortane
            </h1>

            <div className="mt-auto">
              <p className="text-3xl text-[#22303e] font-normal leading-tight">
                Regular
              </p>
              {/* <p className="text-3xl text-[#22303e] font-bold leading-tight">
                Bold
              </p> */}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="text-[#22303e] text-3xl tracking-wide leading-relaxed">
              <p>abcdefghijklmnopqrstuvwxyz</p>
              {/* <p>opqrstuvwxyz</p> */}
              {/* <p>1234567890</p> */}
            </div>

            <div className="mt-40 md:-ml-24">
              <h2 className="text-[200px] font-bold text-[#26323f] leading-none">
                Abc
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
