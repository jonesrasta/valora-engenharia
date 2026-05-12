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
import BrandVoice from "../components/BrandVoice/BrandVoice";
import BrandCommunication from "../components/BrandCommunication/BrandCommunication";
import FinalCard from "../components/FinalCard/FinalCard";
import Conclusion from "../components/Conclusion/Conclusion";
import FeatureGrid from "../components/FeatureGrid/FeatureGrid";

import type { ComponentType } from "react";
import LogoStructure from "../components/LogoStructure/LogoStructure";
import LogoOnDark from "../components/LogoOnDark/LogoOnDark";
import InstagramPosts from "../components/InstagramPosts/InstagramPosts";

export type Slide =
  | {
      type: "image";
      src: string;
      mobileSrc?: string;
    }
  | {
      type: "component";
      component: ComponentType;
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
    slides: [{ type: "component", component: Cover }],
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
      { type: "component", component: BrandPresentation },
    ],
  },
  {
    id: "Essência da Marca",
    label: "Essência",
    children: [
      { id: "essencia-marca", label: "Essência da marca" },
      { id: "missao", label: "Missão Visão Valores" },
      { id: "conceito", label: "Conceito da marca" },
      { id: "posicionamento", label: "Posicionamento" },
      { id: "diferenciais", label: "Diferenciais" },
      { id: "branding-urbano", label: "Branding Urbano" },
      { id: "logo-dark", label: "Logo on Dark" },
    ],
    slides: [
      { type: "component", component: BrandEssence },
      { type: "component", component: MissionVisionValues },
      { type: "component", component: BrandConcept },
      { type: "component", component: BrandPositioning },
      { type: "component", component: BrandDifferentials },
      {
        type: "image",
        src: "/images/8.webp",
        mobileSrc: "/images/8-mobile.webp",
      },
      { type: "component", component: LogoOnDark },
    ],
  },
  {
    id: "cores",
    label: "Cores",
    children: [
      { id: "conceito-cores", label: "Conceito de cores" },
      { id: "paleta-cores", label: "Paleta de cores" },
    ],
    slides: [
      { type: "component", component: ColorPaletteConcept },
      { type: "component", component: ColorPalette },
    ],
  },
  {
    id: "tipografia",
    label: "Tipografia",
    children: [
      { id: "tipografia-uso", label: "Sistema tipográfico" },
      { id: "tipografia-primaria", label: "Fonte primária" },
      { id: "tipografia-secundaria", label: "Fonte secundária" },
    ],
    slides: [
      { type: "component", component: TypographyConcept },
      { type: "component", component: TypographyShowcase },
      { type: "component", component: TypographySecundary },
    ],
  },
  {
    id: "comunicacao-marca",
    label: "Comunicação",
    children: [
      { id: "tom-voz", label: "Tom de Voz" },
      { id: "linguagem-verbal", label: "Linguagem Verbal" },
      { id: "midia-urbana", label: "Mídia Urbana" },
    ],
    slides: [
      { type: "component", component: BrandVoice },
      { type: "component", component: BrandCommunication },
      {
        type: "image",
        src: "/images/bus-urban.webp",
        mobileSrc: "/images/bus-urban-mobile.webp",
      },
    ],
  },
  {
    id: "logo",
    label: "Logotipo",
    children: [
      { id: "conceito-logo", label: "Conceito logotipo" },
      { id: "grid-logo", label: "Construção logotipo" },
      { id: "formas-logo", label: "Formas logotipo" },
      { id: "grid-marca", label: "Grid da Marca" },
      { id: "logo-colors", label: "Cores aplicadas" },
      { id: "variacao-marca", label: "Variações da Marca" },
    ],
    slides: [
      { type: "component", component: LogoConcept },
      { type: "component", component: LogoGrid },
      { type: "component", component: LogoStructureConcept },
      { type: "component", component: LogoStructure },
      { type: "component", component: LogoShowcase },
      { type: "component", component: FeatureGrid },
    ],
  },

  {
    id: "brand-applications",
    label: "Aplicações da Marca",
    children: [
      { id: "digital", label: "Interface Mobile" },
      { id: "cartão", label: "Cartão de Visita" },
      { id: "uniforme", label: "Uniforme" },
      { id: "aplicacao-epis", label: "Aplicação em EPIs" },
      { id: "office", label: "Office" },
      { id: "midias", label: "Mídias Sociais" },
      { id: "favicon", label: "Ícone Digital" },
      { id: "website", label: "WebSite" },
      { id: "website-mobile", label: "Website Mobile" },
      { id: "post-instagram", label: "Instagram" },
    ],
    slides: [
      {
        type: "image",
        src: "/images/7.webp",
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
        src: "/images/logo-office.webp",
        mobileSrc: "/images/logo-office-mobile.webp",
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
      {
        type: "image",
        src: "/images/web.webp",
        mobileSrc: "/images/web-mobile.webp",
      },
            {
        type: "image",
        src: "/images/mobilesite.webp",
        mobileSrc: "/images/sitemobile.webp",
      },
      { type: "component", component: InstagramPosts },
    ],
  },
  {
    id: "conclusao",
    label: "Conclusão",
    slides: [{ type: "component", component: Conclusion }],
  },
  {
    id: "construindo-valor",
    label: "Construindo Valor",
    slides: [{ type: "component", component: FinalCard }],
  },
];
