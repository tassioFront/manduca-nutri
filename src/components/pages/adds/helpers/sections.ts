import Topics from "../Topics";
import Plans from "../Plans";
import HowItWorks from "../HowItWorks";
import ItWorksToThatOne from "../ItWorksToThatOne";
import QAndA from "../QAndA";
import Feedbacks from "../Feedbacks";
import About from "../About";

export const sections = [
  {
    children: Topics,
  },
  {
    heading2: "Planos",
    children: Plans,
  },
  {
    heading2: "Como funciona",
    children: HowItWorks,
  },
  {
    heading2: "Funciona pra quem quer...",
    children: ItWorksToThatOne,
  },
  {
    heading2: "Dúvidas frequentes",
    children: QAndA,
  },
  {
    heading2: "Alguns resultados para compartilhar com você",
    children: Feedbacks,
  },
  {
    children: About,
  },
];
