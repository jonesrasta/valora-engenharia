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
    <div className="flex h-screen bg-zinc-100 text-zinc-900">
      <Header isOpen={isOpen} setOpen={setOpen} />

      <Sidebar
        sections={sections}
        active={active}
        onChange={setActive}
        isOpen={isOpen}
        setOpen={setOpen}
      />

      <main className="flex-1 flex items-center justify-center p-2 md:pt-0">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold mb-6">
            {current.label}
          </h1>

          {/* 🔥 AGORA CORRETO */}
          <Carousel slides={current.slides} />
        </div>
      </main>
    </div>
  );
}