import type { ReactNode } from "react";
import Cover from "../components/Cover/Cover";
import ColorPalette from "../components/ColorPalette/ColorPalette";
import TypographyShowcase from "../components/TypographyShowcase/TypographyShowcase";
import TypographySecundary from "../components/TypographyShowcase/TypographySecundary";
import LogoShowcase from "../components/LogoShowcase/LogoShowcase";
import LogoGrid from "../components/LogoGrid/LogoGrid";
import BrandEssence from "../components/BrandEssence/BrandEssence";
import MissionVisionValues from "../components/MissionVisionValues/MissionVisionValues";
import BrandConcept from "../components/BrandConcept/BrandConcept";
import BrandPositioning from "../components/BrandPositioning/BrandPositioning";
import BrandDifferentials from "../components/BrandDifferentials/BrandDifferentials";
import BrandPresentation from "../components/BrandPresentation/BrandPresentation";
import LogoConcept from "../components/LogoConcept/LogoConcept";
import LogoStructureConcept from "../components/LogoStructureConcept/LogoStructureConcept";
import TypographyConcept from "../components/TypographyConcept/TypographyConcept";
import ColorPaletteConcept from "../components/ColorPaletteConcept/ColorPaletteConcept";

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
    children: [
      { id: "aplicacao-urbana", label: "Aplicação Urbana" },
      { id: "apresentacao-marca", label: "Apresentação Marca" },
    ],
    slides: [
      { type: "image", src: "/images/1.webp" },
      { type: "component", component: <BrandPresentation /> },
    ],
  },
  {
    id: "Essência da Marca",
    label: "Essência",
    children: [
      { id: "essencia-marca", label: "Essência da Marca" },
      { id: "missao", label: "Missão Visão Valores" },
      { id: "conceito", label: "Conceito da Marca" },
      { id: "posicionamento", label: "Posicionamento" },
      { id: "diferenciais", label: "Diferenciais" },
    ],
    slides: [
      { type: "component", component: <BrandEssence /> },
      { type: "component", component: <MissionVisionValues /> },
      { type: "component", component: <BrandConcept /> },
      { type: "component", component: <BrandPositioning /> },
      { type: "component", component: <BrandDifferentials /> },
    ],
  },
  {
    id: "cores",
    label: "Cores",
    children: [
      { id: "conceito-cores", label: "Conceito de Cores" },
      { id: "paleta-cores", label: "Paleta de Cores" },
    ],
    slides: [
      { type: "component", component: <ColorPaletteConcept /> },
      { type: "component", component: <ColorPalette /> },
    ],
  },
  {
    id: "tipografia",
    label: "Tipografia",
    children: [
      { id: "tipografia-uso", label: "Uso tipográfico" },
      { id: "tipografia-primaria", label: "Fonte Primária" },
      { id: "tipografia-secundaria", label: "Fonte Secundária" },
    ],
    slides: [
      { type: "component", component: <TypographyConcept /> },
      { type: "component", component: <TypographyShowcase /> },
      { type: "component", component: <TypographySecundary /> },
    ],
  },
  {
    id: "logo",
    label: "Logotipo",
    children: [
      { id: "conceito-logo", label: "Conceito Logotipo" },
      { id: "grid-logo", label: "Logotipo Grid" },
      { id: "formas-logo", label: "Formas Logotipo" },
      { id: "logo-colors", label: "Cores aplicadas" },
    ],
    slides: [
      { type: "component", component: <LogoConcept /> },
      { type: "component", component: <LogoGrid /> },
      { type: "component", component: <LogoStructureConcept /> },
      { type: "component", component: <LogoShowcase /> },
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
