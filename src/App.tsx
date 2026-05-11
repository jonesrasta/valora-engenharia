import { useState, useMemo, useRef } from "react";

import Sidebar from "./components/layout/Sidebar/Sidebar";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import { sections } from "./data/branding";

type FlatItem = {
  id: string;
  sectionId: string;
  slideIndex: number;
};

export default function App() {
  const [isOpen, setOpen] = useState(false);

  // REF DO BOTÃO HAMBURGER
  const menuButtonRef = useRef<HTMLDivElement | null>(null);

  // LISTA FLATTEN
  const flatList: FlatItem[] = useMemo(() => {
    return sections.flatMap((section) => {
      // SEÇÃO COM CHILDREN
      if (section.children) {
        return section.children.map((child, index) => ({
          id: child.id,
          sectionId: section.id,
          slideIndex: index,
        }));
      }

      // SEÇÃO NORMAL
      return section.slides.map((_, index) => ({
        id: section.id,
        sectionId: section.id,
        slideIndex: index,
      }));
    });
  }, []);

  // ÍNDICE GLOBAL
  const [globalIndex, setGlobalIndex] = useState(0);

  const currentItem = flatList[globalIndex];

  const currentSection = sections.find(
    (section) => section.id === currentItem.sectionId
  )!;

  const slides = [
    currentSection.slides[currentItem.slideIndex],
  ];

  const active = currentItem.id;

  // TROCA VIA SIDEBAR
  const handleChange = (id: string) => {
    const index = flatList.findIndex(
      (item) => item.id === id
    );

    if (index !== -1) {
      setGlobalIndex(index);
    }

    // FECHA MENU MOBILE
    setOpen(false);
  };

  // NEXT
  const next = () => {
    setGlobalIndex((prevIndex) =>
      prevIndex === flatList.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  // PREV
  const prev = () => {
    setGlobalIndex((prevIndex) =>
      prevIndex === 0
        ? flatList.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col overflow-x-hidden">
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        menuButtonRef={menuButtonRef}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sections={sections}
          active={active}
          onChange={handleChange}
          isOpen={isOpen}
          setOpen={setOpen}
          menuButtonRef={menuButtonRef}
        />

        <main className="flex-1 flex items-center justify-center md:p-8">
          <div className="w-full max-w-6xl">
            <Carousel
              slides={slides}
              onNext={next}
              onPrev={prev}
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}