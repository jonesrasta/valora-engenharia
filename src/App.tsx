import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header";
import { sections } from "./data/branding";

export default function App() {
  const [active, setActive] = useState(sections[0].id);
  const [isOpen, setOpen] = useState(false);

  const current = sections.find((s) => s.id === active)!;

  return (
    <div className="h-screen bg-zinc-200 text-zinc-900 flex flex-col">
      
      {/* HEADER */}
      <Header isOpen={isOpen} setOpen={setOpen} />

      {/* CONTEÚDO */}
      <div className="flex flex-1 overflow-x-hidden">
        
        <Sidebar
          sections={sections}
          active={active}
          onChange={setActive}
          isOpen={isOpen}
          setOpen={setOpen}
        />

        <main className="flex-1 flex items-center justify-center md:p-8 ">
          <div className="w-full max-w-6xl">
            <Carousel slides={current.slides} />
          </div>
        </main>

      </div>
    </div>
  );
}