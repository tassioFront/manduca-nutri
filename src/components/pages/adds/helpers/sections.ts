import Topics from "../Topics";
import Plans from "../Plans";
import HowItWorks from "../HowItWorks";
import ItWorksToThatOne from "../ItWorksToThatOne";
import QAndA from "../QAndA";

export const sections = [
  {
    heading2: "",
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
];
