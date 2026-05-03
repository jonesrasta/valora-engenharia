import type { Section } from "../../data/branding";
import logo from "../../assets/logo.svg";

interface Props {
  sections: Section[];
  active: string;
  onChange: (id: string) => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({
  sections,
  active,
  onChange,
  isOpen,
  setOpen,
}: Props) {
  return (
    <>
      {/* OVERLAY MOBILE */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static
          top-0 left-0 h-full w-64
          bg-[#22303e] text-white p-6
          z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <img src={logo} alt="Valora" className="h-10 mb-10 mt-8" />

        <nav className="flex flex-col gap-2">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onChange(item.id);
                setOpen(false); // fecha no mobile
              }}
              className={`
                text-left px-3 py-2 rounded-md transition
                ${
                  active === item.id
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}