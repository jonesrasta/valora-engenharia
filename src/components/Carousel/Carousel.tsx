import { motion, AnimatePresence } from "framer-motion";
import type { Slide } from "../../data/branding";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  if (!slides || slides.length === 0) return null;

  const current = slides[0];

  if (!current) return null;

  return (
    <div className="relative w-full h-screen overflow-x-hidden md:h-200 md:rounded-3xl md:overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(current)}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
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
                className="w-full h-full object-cover mt-16 md:rounded-3xl"
              />
            </picture>
          ) : (
            <div className="w-full h-full">
              {current.component}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* BOTÕES */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 md:absolute">
        <button
          onClick={onPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition hover:bg-black/60"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>

        <button
          onClick={onNext}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition hover:bg-black/60"
        >
          <ArrowRight size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}