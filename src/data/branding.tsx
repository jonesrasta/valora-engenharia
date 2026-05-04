import type { ReactNode } from "react";
import Cover from "../components/Cover/Cover";
import ColorPalette from "../components/ColorPalette/ColorPalette";
import TypographyShowcase from "../components/TypographyShowcase/TypographyShowcase";

export interface Slide {
  type: "image" | "component";
  src?: string;
  component?: ReactNode;
}

export interface Section {
  id: string;
  label: string;
  slides: Slide[];
}



export const sections: Section[] = [
  {
    id: "institucional",
    label: "Institucional",
    slides: [
      { type: "component", component: <Cover /> }, 
      { type: "image", src: "/images/1.webp" },
      { type: "component", component: <ColorPalette /> },
      { type: "component", component: <TypographyShowcase/> },
    ],
  },
  {
    id: "projetos",
    label: "Projetos",
    slides: [
      { type: "image", src: "/img/1.webp" },
      { type: "image", src: "/img/2.webp" },
    ],
  },
];
