import type { Dispatch, RefObject, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
}

export default function Header({
  isOpen,
  setOpen,
  menuButtonRef,
}: Props) {
  return (
    <header
      className="
        md:hidden
        fixed top-0 left-0
        w-full h-18
        bg-[#22303efa]
        backdrop-blur-md
        flex items-center justify-end
        px-3
        z-40
        shadow-sm
      "
    >
      <button
        ref={menuButtonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir menu"
        className="relative flex h-12 w-12 items-center justify-center"
      >
        <span
          className={`
            absolute h-0.5 w-9 rounded-full bg-white
            transition-all duration-300 ease-in-out
            ${isOpen ? "rotate-45" : "-translate-y-1"}
          `}
        />

        {/* <span
          className={`
            absolute h-px w-9 rounded-full bg-white
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0 scale-0" : ""}
          `}
        /> */}

        <span
          className={`
            absolute h-0.5 w-9 rounded-full bg-white
            transition-all duration-300 ease-in-out
            ${isOpen ? "-rotate-45" : "translate-y-1"}
          `}
        />
      </button>
    </header>
  );
}