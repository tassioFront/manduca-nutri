import { Styles } from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";

const itWorksToThatOne = [
  {
    title: "Emagrecer",
    description:
      "Mulheres que tem como objetivo perder peso de maneira saudável. Sem radicalimos! ",
    src: "girl_with_trena.jpeg",
    alt: "Garota com trena",
  },
  {
    title: "Aumentar Autoestima",
    src: "girl_and_mirror.png",
    alt: "Garota com espelho",
    description:
      "Comer bem é viver bem: saiba como aumentar sua autoestima através da alimentação.",
  },
  {
    title: "Ganhar Massa Magra",
    src: "women-performimg.jpeg",
    alt: "Garota com espelho",

    description:
      "Mulheres que tem como objetivo desenvolver massa magra após o período de emagrecimento.",
  },
  {
    title: "Ter Alimentação saudável",
    alt: "Garota com espelho",
    src: "foods.jpeg",
    description:
      "Mulheres que tem como objetivo uma alimentação saudável e melhorar o estilo de vida.",
  },
];

export default function ItWorksToThatOne() {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {itWorksToThatOne.map(({ description, src, title }) => (
          <Styles.Paper key={title}>
            <Image
              src={"./" + src}
              height="160"
              width="160"
              alt="ícone com passo"
            />
            <Typography variant="h3" color="white" fontWeight="bold">
              {title}
            </Typography>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </Styles.Paper>
        ))}
      </Styles.Content>
      <WhatsAppBtn />
    </Styles.Wrapper>
  );
}
