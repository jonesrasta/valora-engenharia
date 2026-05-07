import type { ReactNode } from "react";
import Cover from "../components/Cover/Cover";
import ColorPalette from "../components/ColorPalette/ColorPalette";
import TypographyShowcase from "../components/TypographyShowcase/TypographyShowcase";
import SectionBlock from "../components/SectionBlock/SectionBlock";
import TypographySecundary from "../components/TypographyShowcase/TypographySecundary";
import LogoShowcase from "../components/LogoShowcase/LogoShowcase";
import LogoGrid from "../components/LogoGrid/LogoGrid";

export type Slide =
  | {
      type: "image";
      src: string;
      mobileSrc?: string;
    }
  | {
      type: "component";
      component: ReactNode;
    };

export interface Section {
  id: string;
  label: string;
  slides: Slide[];
  children?: {
    id: string;
    label: string;
  }[];
}

export const sections: Section[] = [
  {
    id: "capa",
    label: "Capa",
    slides: [{ type: "component", component: <Cover /> }],
  },
  {
    id: "apresentacao",
    label: "Apresentação",
    slides: [
      { type: "image", src: "/images/1.webp" },
      {
        type: "component",
        component: (
          <SectionBlock
            className="my-16 px-4"
            title="Apresentação da Marca"
            texts={[
              "A Valora Engenharia nasce com o propósito de transformar projetos em valor real. Atuando com excelência técnica e visão estratégica, a empresa se destaca pela capacidade de unir engenharia, precisão e alto padrão em cada entrega.",

              "Mais do que construir, a Valora desenvolve soluções inteligentes e bem estruturadas, pensadas para atender às demandas de um mercado exigente, onde qualidade, confiança e atenção aos detalhes são indispensáveis.",

              "Com um posicionamento sólido e contemporâneo, a marca reflete sofisticação, segurança e credibilidade. Cada projeto é conduzido com rigor técnico e compromisso, garantindo resultados consistentes e duradouros.",

              "Valora Engenharia é sinônimo de construir com propósito, elevar padrões e entregar valor em cada detalhe.",
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "cores",
    label: "Cores",
    slides: [{ type: "component", component: <ColorPalette /> }],
  },
  {
    id: "tipografia",
    label: "Tipografia",
    children: [
      { id: "tipografia-primaria", label: "Fonte Primária" },
      { id: "tipografia-secundaria", label: "Fonte Secundária" },
    ],
    slides: [
      { type: "component", component: <TypographyShowcase /> },
      { type: "component", component: <TypographySecundary /> },
    ],
  },
  {
    id: "logo",
    label: "Logo",
    slides: [
      { type: "component", component: <LogoGrid /> },
      { type: "component", component: <LogoShowcase /> },
      // {
      //   type: "image",
      //   src: "/images/7.webp",
      // },
      // {
      //   type: "image",
      //   src: "/images/8.webp",
      //   mobileSrc: "/images/8-mobile.webp",
      // },
    ],
  },
  {
    id: "Mockups",
    label: "Mockups",
    slides: [
      {
        type: "image",
        src: "/images/7.webp",
      },
      {
        type: "image",
        src: "/images/8.webp",
        mobileSrc: "/images/8-mobile.webp",
      },
      {
        type: "image",
        src: "/images/10.webp",
        mobileSrc: "/images/10-mobile.webp",
      },
      {
        type: "image",
        src: "/images/11.webp",
      },
      {
        type: "image",
        src: "/images/12.webp",
      },
      {
        type: "image",
        src: "/images/13.webp",
        mobileSrc: "/images/13-mobile.webp",
      },
            {
        type: "image",
        src: "/images/14.webp",
        mobileSrc: "/images/14-mobile.webp",
      },
    ],
  },
];
