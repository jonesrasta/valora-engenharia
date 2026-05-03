export interface Section {
  id: string;
  label: string;
  cover: string;
  gallery: string[];
}

export const sections: Section[] = [
  {
    id: "institucional",
    label: "Institucional",
    cover: "/images/capa.webp",
    gallery: [
      "/images/capa.webp",
      "/images/1.webp",
    ],
  },
  {
    id: "projetos",
    label: "Projetos",
    cover: "/images/projetos/capa.webp",
    gallery: [
      "/images/projetos/1.webp",
      "/images/projetos/2.webp",
    ],
  },
  {
    id: "obras",
    label: "Obras",
    cover: "/images/obras/capa.webp",
    gallery: [
      "/images/obras/1.webp",
      "/images/obras/2.webp",
    ],
  },
];