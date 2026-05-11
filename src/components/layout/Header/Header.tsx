import { Cross as Hamburger } from "hamburger-react";
import type {
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";

interface Props {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  menuButtonRef: RefObject<HTMLDivElement | null>;
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
        text-white
        flex items-center justify-end
        px-3
        z-40
        shadow-sm
      "
    >
      <div ref={menuButtonRef}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={29}
          duration={0.3}
          distance="sm"
        />
      </div>
    </header>
  );
}