import {
  motion,
  AnimatePresence,
} from "framer-motion";

import type { Slide } from "../../data/branding";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useCallback,
} from "react";

interface Props {
  slides: Slide[];
  onNext: () => void;
  onPrev: () => void;
}

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Carousel({
  slides,
  onNext,
  onPrev,
}: Props) {
  const scrollRef =
    useRef<HTMLDivElement>(null);

  const touchStartX = useRef(0);

  const current = slides[0];

  // RESET SCROLL
  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      top: 0,
      behavior: "instant",
    } as ScrollToOptions);
  }, [current]);

  // TOUCH
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartX.current =
        e.changedTouches[0].clientX;
    },
    []
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const touchEndX =
        e.changedTouches[0].clientX;

      const distance =
        touchStartX.current - touchEndX;

      const threshold = 70;

      if (distance > threshold) {
        onNext();
      }

      if (distance < -threshold) {
        onPrev();
      }
    },
    [onNext, onPrev]
  );

  if (!slides.length || !current) {
    return null;
  }

  return (
    <div
      className="
        relative
        w-full
        h-screen
        md:h-200
        overflow-hidden
        md:rounded-3xl
        touch-pan-y
      "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          ref={scrollRef}
          key={
            current.type === "image"
              ? current.src
              : String(
                  slides.indexOf(current)
                )
          }
          className="
            absolute inset-0
            overflow-y-auto
            overflow-x-hidden
            scrollbar-hide
          "
          initial={{
            opacity: 0,
            scale: 1.01,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.992,
          }}
          transition={transition}
        >
          {current.type === "image" ? (
            <motion.picture
              className="
                block
                w-full
                h-full
              "
              initial={{
                scale: 1.015,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 2.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {current.mobileSrc && (
                <source
                  media="(max-width: 768px)"
                  srcSet={
                    current.mobileSrc
                  }
                />
              )}

              <img
                src={current.src}
                alt=""
                loading="eager"
                draggable={false}
                className="
                  w-full
                  h-full
                  object-cover
                  select-none
                  pointer-events-none
                  md:rounded-3xl
                "
              />
            </motion.picture>
          ) : (
            (() => {
              const Component =
                current.component;

              return (
                <motion.div
                  className="
                    w-full
                    min-h-200
                  "
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  <Component />
                </motion.div>
              );
            })()
          )}
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-t
          from-black/10
          via-transparent
          to-black/5
        "
      />

      {/* CONTROLS */}
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
        className="
          fixed md:absolute
          bottom-4
          right-4
          z-50
          flex gap-2
        "
      >
        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={onPrev}
          aria-label="Slide anterior"
          className="
            flex items-center
            justify-center
            w-10 h-10
            rounded-full
            border border-white/10
            bg-black/30
            backdrop-blur-xl
            text-white
            hover:bg-black/45
            transition-colors
          "
        >
          <ArrowLeft size={18} />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={onNext}
          aria-label="Próximo slide"
          className="
            flex items-center
            justify-center
            w-10 h-10
            rounded-full
            border border-white/10
            bg-black/30
            backdrop-blur-xl
            text-white
            hover:bg-black/45
            transition-colors
          "
        >
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </div>
  );
}


// import { motion, AnimatePresence } from "framer-motion";
// import type { Slide } from "../../data/branding";

// import {
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// import { useEffect, useRef } from "react";

// interface Props {
//   slides: Slide[];
//   onNext: () => void;
//   onPrev: () => void;
// }

// export default function Carousel({
//   slides,
//   onNext,
//   onPrev,
// }: Props) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const current = slides[0];

//   // RESET SCROLL AO TROCAR SLIDE
//   useEffect(() => {
//     if (!scrollRef.current || !current) return;

//     scrollRef.current.scrollTo({
//       top: 0,
//       behavior: "instant",
//     } as ScrollToOptions);
//   }, [current]);

//   // SEM SLIDES
//   if (!slides.length || !current) {
//     return null;
//   }

//   return (
//     <div
//       className="
//         relative
//         w-full
//         h-screen
//         md:h-200
//         md:rounded-3xl
//         overflow-hidden
//       "
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           ref={scrollRef}
//           key={
//             current.type === "image"
//               ? current.src
//               : String(slides.indexOf(current))
//           }
//           className="
//             absolute inset-0
//             overflow-y-auto
//             overflow-x-hidden
//             scrollbar-hide
//             will-change-transform
//           "
//           initial={{
//             opacity: 0,
//             scale: 1.005,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           exit={{
//             opacity: 0,
//             scale: 0.995,
//           }}
//           transition={{
//             duration: 0.35,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         >
//           {/* IMAGE */}
//           {current.type === "image" ? (
//             <picture className="block w-full h-full">
//               {current.mobileSrc && (
//                 <source
//                   media="(max-width: 768px)"
//                   srcSet={current.mobileSrc}
//                 />
//               )}

//               <img
//                 src={current.src}
//                 alt=""
//                 loading="eager"
//                 draggable={false}
//                 className="
//                   w-full
//                   h-full
//                   object-cover
//                   md:rounded-3xl
//                   select-none
//                   pointer-events-none
//                   will-change-transform
//                 "
//               />
//             </picture>
//           ) : (
//             // COMPONENT
//             (() => {
//               const Component = current.component;

//               return (
//                 <div className="w-full min-h-full">
//                   <Component />
//                 </div>
//               );
//             })()
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* CONTROLS */}
//       <div
//         className="
//           fixed md:absolute
//           bottom-4
//           right-4
//           z-50
//           flex gap-1.5
//         "
//       >
//         <button
//           onClick={onPrev}
//           aria-label="Slide anterior"
//           className="
//             flex items-center justify-center
//             h-10 w-10
//             rounded-full
//             bg-black/40
//             backdrop-blur-md
//             transition-all duration-300
//             hover:bg-black/60
//             active:scale-95
//           "
//         >
//           <ArrowLeft
//             size={18}
//             className="text-white"
//           />
//         </button>

//         <button
//           onClick={onNext}
//           aria-label="Próximo slide"
//           className="
//             flex items-center justify-center
//             h-10 w-10
//             rounded-full
//             bg-black/40
//             backdrop-blur-md
//             transition-all duration-300
//             hover:bg-black/60
//             active:scale-95
//           "
//         >
//           <ArrowRight
//             size={18}
//             className="text-white"
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

