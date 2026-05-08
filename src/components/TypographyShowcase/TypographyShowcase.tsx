// import { motion } from "framer-motion";

// export default function TypographyShowcase() {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center p-6 md:p-12">
//       <div className="w-200 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col justify-between h-full"
//         >
//           {/* Title */}
//           <h1 className="text-4xl md:text-6xl font-semibold text-[#22303e] mb-10">
//             Neue Metana
//           </h1>

//           {/* Regular / Bold */}
//           <div className="mt-auto">
//             <p className="text-xl md:text-3xl text-[#22303e] font-normal leading-tight">
//               Regular
//             </p>
//             <p className="text-xl md:text-3xl text-[#22303e] font-bold leading-tight">
//               Bold
//             </p>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col justify-between h-full"
//         >
//           {/* Alphabet */}
//           <div className="text-[#22303e] text-lg md:text-2xl tracking-wide leading-relaxed">
//             <p>abcdefghijklmnopqrstuvwxyz</p>
//             <p>opqrstuvwxyz</p>
//             <p>1234567890</p>
//           </div>

//           {/* Big ABC */}
//           <div className="mt-10 md:mt-40 md:-ml-24">
//             <h2 className="text-[100px] md:text-[180px] lg:text-[200px] font-bold text-[#26323f] leading-none">
//               Abc
//             </h2>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function TypographyShowcase() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-300">

        {/* MOBILE LAYOUT (EXATO DO DESIGN) */}
        <div className="flex flex-col md:hidden">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold text-[#22303e] mb-8 py-8"
          >
            Neue Metana
          </motion.h1>

          {/* Alphabet */}
          <div className="flex flex-col items-end text-[#22303e] text-2xl tracking-wide leading-6 mb-16 [&_p]:no-underline">
            <p>abcdefghijklmn</p>
            <span>
              opqrstuvwxyz<span className="text-zinc-200">..</span>
              <p>1234567890</p>
            </span>
          </div>

          {/* Regular / Bold */}
          <div className="flex gap-2">
            <div className="mb-16 mt-10">
              <p className="text-lg text-[#22303e] font-normal leading-tight">
                Regular
              </p>
              <p className="text-lg text-[#22303e] font-bold leading-tight">
                Bold
              </p>
            </div>
            {/* Big ABC */}
            <h2 className="text-[100px] font-bold text-[#26323f] leading-none">
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
            <h1 className="text-[44px] font-semibold text-[#22303e] mb-10">
              Neue Metana
            </h1>

            <div className="mt-auto">
              <p className="text-3xl text-[#22303e] font-normal leading-tight">
                Regular
              </p>
              <p className="text-3xl text-[#22303e] font-bold leading-tight">
                Bold
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="text-[#22303e] text-3xl tracking-wide leading-8 mt-24">
              <p>abcdefghijklmn</p>
              <p>opqrstuvwxyz</p>
              <p>1234567890</p>
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
