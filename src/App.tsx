import { useState, useMemo } from "react";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/layout/Header/Header";
import { sections } from "./data/branding";
import Footer from "./components/layout/Footer/Footer";

type FlatItem = {
  id: string;
  sectionId: string;
  slideIndex: number;
};

export default function App() {
  const [isOpen, setOpen] = useState(false);

  // 🔥 LISTA LINEAR
  const flatList: FlatItem[] = useMemo(() => {
    return sections.flatMap((section) => {
      if (section.children) {
        return section.children.map((child, index) => ({
          id: child.id,
          sectionId: section.id,
          slideIndex: index,
        }));
      }

      return section.slides.map((_, index) => ({
        id: section.id,
        sectionId: section.id,
        slideIndex: index,
      }));
    });
  }, []);

  const [globalIndex, setGlobalIndex] = useState(0);

  const currentItem = flatList[globalIndex];

  const currentSection = sections.find(
    (s) => s.id === currentItem.sectionId
  )!;

  const slides = [currentSection.slides[currentItem.slideIndex]];

 
  const active = currentItem.id;


  const handleChange = (id: string) => {
    const index = flatList.findIndex((item) => item.id === id);
    if (index !== -1) {
      setGlobalIndex(index);
    }
  };


  const next = () => {
    setGlobalIndex((i) =>
      i === flatList.length - 1 ? 0 : i + 1
    );
  };

  // PREV
  const prev = () => {
    setGlobalIndex((i) =>
      i === 0 ? flatList.length - 1 : i - 1
    );
  };

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col overflow-x-hidden">
      <Header isOpen={isOpen} setOpen={setOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sections={sections}
          active={active}
          onChange={handleChange}
          isOpen={isOpen}
          setOpen={setOpen}
        />

        <main className="flex-1 flex items-center justify-center md:p-8 overflow-y-auto">
          <div className="w-full max-w-6xl">
            <Carousel slides={slides} onNext={next} onPrev={prev} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}