// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import type { Slide } from "../../data/branding";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Props {
//   slides: Slide[];
// }

// export default function Carousel({ slides }: Props) {
//   const [index, setIndex] = useState(0);

//   const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

//   const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

//   const current = slides[index];

//   return (
//     <div className="relative w-full h-150 md:h-200 overflow-hidden rounded-2xl">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -40 }}
//           transition={{ duration: 0.4 }}
//         >
//           {current.type === "image" ? (
//             <img src={current.src} className="w-full h-full object-cover" />
//           ) : (
//             <div className="w-full h-full">{current.component}</div>
//           )}
//         </motion.div>
//       </AnimatePresence>

      /* CONTROLES */
      /* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div> 
      {/* <button
        onClick={prev}
        className="absolute w-10 h-10 left-4 top-1/2 -translate-y-1/2 bg-[#3f3f3f57] backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition"
      >
        <ChevronLeft size={20} color="#ffffffab" />
      </button>

      <button
        onClick={next}
        className="absolute w-10 h-10 right-4 top-1/2 -translate-y-1/2 bg-[#3f3f3f57] backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition"
      >
        <ChevronRight size={20} color="#ffffffab" />
      </button>
    </div>
  );
} */



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import type { Slide } from "../../data/branding";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// interface Props {
//   slides: Slide[];
// }

// export default function Carousel({ slides }: Props) {
//   const [index, setIndex] = useState(0);

//   const prev = () =>
//     setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

//   const next = () =>
//     setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

//   const current = slides[index];

//   return (
//     <div className="relative w-full h-150 md:h-200 overflow-hidden rounded-2xl">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0, scale: 1.02 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.98 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           {current.type === "image" ? (
//             <img
//               src={current.src}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full">
//               {current.component}
//             </div>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* CONTROLES (BOTTOM RIGHT) */}
//       <div className="absolute bottom-6 right-6 flex gap-2 z-20">
//         <button
//           onClick={prev}
//           className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
//         >
//           <ArrowLeft size={18} className="text-white" />
//         </button>

//         <button
//           onClick={next}
//           className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
//         >
//           <ArrowRight size={18} className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Slide } from "../../data/branding";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  slides: Slide[];
}

export default function Carousel({ slides }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const current = slides[index];

  return (
    <div className="relative w-full h-screen overflow-x-hidden md:h-200 md:rounded-2xl md:overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {current.type === "image" ? (
            <img
              src={current.src}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full">
              {current.component}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* CONTROLES (BOTTOM RIGHT) */}
      <div className="md:absolute fixed bottom-6 right-6 flex gap-2 z-20">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
        >
          <ArrowRight size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}