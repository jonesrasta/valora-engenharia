import { motion, AnimatePresence } from "framer-motion";
import type { Slide } from "../../data/branding";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  slides: Slide[];
  onNext: () => void;
  onPrev: () => void;
}

export default function Carousel({
  slides,
  onNext,
  onPrev,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = slides?.[0];

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [current]);

  if (!slides || slides.length === 0 || !current) {
    return null;
  }

  return (
    <div
      className="
        relative
        w-full
        h-screen
        md:h-200
        md:rounded-3xl
        overflow-hidden
        
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          ref={scrollRef}
          key={JSON.stringify(current)}
          className="
            absolute inset-0
            overflow-y-auto
            overflow-x-hidden
            scrollbar-hide
          "
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.995 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {current.type === "image" ? (
            <picture className="block w-full h-full">
              {current.mobileSrc && (
                <source
                  media="(max-width: 768px)"
                  srcSet={current.mobileSrc}
                />
              )}

              <img
                src={current.src}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  md:rounded-3xl
                  select-none
                  pointer-events-none
                "
              />
            </picture>
          ) : (
            <div className="w-full min-h-full">
              {current.component}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex gap-2 md:absolute">
        <button
          onClick={onPrev}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-black/40
            backdrop-blur-md
            transition-all duration-300
            hover:bg-black/60
          "
        >
          <ArrowLeft size={18} className="text-white" />
        </button>

        <button
          onClick={onNext}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-black/40
            backdrop-blur-md
            transition-all duration-300
            hover:bg-black/60
          "
        >
          <ArrowRight size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}