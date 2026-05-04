import { Squeeze as Hamburger } from 'hamburger-react'
import type { Dispatch, SetStateAction } from "react";
// import logo from "../assets/logo.svg";

interface Props {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ isOpen, setOpen }: Props) {
  return (
    <header className="md:hidden fixed top-0 left-0 w-full h-18 bg-[#22303e] backdrop-blur-md text-white flex items-center justify-end px-4 z-50 shadow">
      {/* <img src={logo} alt="Valora" className="h-8" /> */}

      <Hamburger toggled={isOpen} toggle={setOpen} size={29} duration={0.4} />
    </header>
  );
}