import Topics from "../Topics";
import Plans from "../Plans";
import HowItWorks from "../HowItWorks";
import ItWorksToThatOne from "../ItWorksToThatOne";
import QAndA from "../QAndA";
import Feedbacks from "../Feedbacks";
import About from "../About";
import { colors } from "@/styles/theme";

export const sections = [
  {
    children: Topics,
  },
  {
    heading2: "Funciona pra quem quer...",
    children: ItWorksToThatOne,
  },
  {
    heading2: "Como funciona",
    children: HowItWorks,
  },
  {
    heading2: "Planos",
    children: Plans,
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

export const defineContext = (
  context: "pinkContext" | "premiumContext" = "pinkContext"
) => {
  const premiumColor = {
    contextColor: colors.palette.premiumContext.main,
    contextColorContrast: colors.palette.premiumContext.mainContrast,
  };
  const pinkColor = {
    contextColor: colors.palette.pinkContext.main,
    contextColorContrast: colors.palette.pinkContext.mainContrast,
  };
  const pinkColorInverted = {
    contextColor: colors.palette.pinkContext.mainContrast,
    contextColorContrast: colors.palette.pinkContext.main,
  };

  const mapColors = {
    topics: {
      premiumContext: premiumColor,
      pinkContext: pinkColorInverted,
    },
    itWorksToThatOne: {
      premiumContext: premiumColor,
      pinkContext: pinkColor,
    },
    howItWorks: {
      premiumContext: premiumColor,
      pinkContext: pinkColorInverted,
    },
    plans: {
      premiumContext: premiumColor,
      pinkContext: pinkColor,
    },
    qandA: {
      premiumContext: premiumColor,
      pinkContext: pinkColorInverted,
    },
    feedbacks: {
      premiumContext: premiumColor,
      pinkContext: pinkColor,
    },
    about: {
      premiumContext: premiumColor,
      pinkContext: pinkColorInverted,
    },
  };
  return [
    {
      children: Topics,
      ...mapColors.topics[context as keyof typeof mapColors.topics],
      // contextColor: colors.palette[context as keyof typeof colors.palette].main,
      // contextColorContrast:
      //   colors.palette[context as keyof typeof colors.palette].mainContrast,
    },
    {
      heading2: "Funciona pra quem quer...",
      children: ItWorksToThatOne,
      ...mapColors.itWorksToThatOne[
        context as keyof typeof mapColors.itWorksToThatOne
      ],
    },
    {
      heading2: "Como funciona",
      children: HowItWorks,
      ...mapColors.howItWorks[context as keyof typeof mapColors.howItWorks],
    },
    {
      heading2: "Planos",
      children: Plans,
      ...mapColors.plans[context as keyof typeof mapColors.plans],
    },
    {
      heading2: "Dúvidas frequentes",
      children: QAndA,
      ...mapColors.qandA[context as keyof typeof mapColors.qandA],
    },
    {
      heading2: "Alguns resultados para compartilhar com você",
      children: Feedbacks,
      ...mapColors.feedbacks[context as keyof typeof mapColors.feedbacks],
    },
    {
      children: About,
      ...mapColors.about[context as keyof typeof mapColors.about],
    },
  ];
};
