import type { ReactNode } from "react";
import Cover from "../components/Cover/Cover";

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
