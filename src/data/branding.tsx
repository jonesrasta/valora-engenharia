import type { ReactNode } from "react";
import Cover from "../components/Cover/Cover";
import ColorPalette from "../components/ColorPalette/ColorPalette";
import TypographyShowcase from "../components/TypographyShowcase/TypographyShowcase";
import SectionBlock from "../components/SectionBlock/SectionBlock";
import TypographySecundary from "../components/TypographyShowcase/TypographySecundary";

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

// export const sections: Section[] = [
//   {
//     id: "institucional",
//     label: "Institucional",
//     slides: [
//       { type: "component", component: <Cover /> },
//       {
//         type: "component",
//         component: (
//           <SectionBlock className="my-20"
//             title="Apresentação da Marca"
//             texts={[
//               "A Valora Engenharia nasce com o propósito de transformar projetos em valor real. Atuando com excelência técnica e visão estratégica, a empresa se destaca pela capacidade de unir engenharia, precisão e alto padrão em cada entrega.",

//               "Mais do que construir, a Valora desenvolve soluções inteligentes e bem estruturadas, pensadas para atender às demandas de um mercado exigente, onde qualidade, confiança e atenção aos detalhes são indispensáveis.",

//               "Com um posicionamento sólido e contemporâneo, a marca reflete sofisticação, segurança e credibilidade. Cada projeto é conduzido com rigor técnico e compromisso, garantindo resultados consistentes e duradouros.",

//               "Valora Engenharia é sinônimo de construir com propósito, elevar padrões e entregar valor em cada detalhe.",
//             ]}
//           />
//         ),
//       },
//       { type: "image", src: "/images/1.webp" },
//       { type: "component", component: <ColorPalette /> },
//       { type: "component", component: <TypographyShowcase /> },
//       { type: "component", component: <TypographySecundary /> },
//     ],
//   },
//   {
//     id: "projetos",
//     label: "Projetos",
//     slides: [
//       { type: "image", src: "/img/1.webp" },
//       { type: "image", src: "/img/2.webp" },
//     ],
//   },
// ];


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
      {
        type: "component",
        component: (
         <SectionBlock className="my-20"
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
       { type: "image", src: "/images/1.webp" },
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
    slides: [
      { type: "component", component: <TypographyShowcase /> },
      { type: "component", component: <TypographySecundary /> },
    ],
  },
  {
    id: "logo",
    label: "Logo",
    slides: [
      { type: "image", src: "/images/1.webp" },
      // depois você pode trocar por componente
    ],
  },
];