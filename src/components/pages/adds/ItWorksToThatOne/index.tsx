import { Styles } from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";
import { Stack } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";

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

const andAlsoWorksToThatOne = [
  "Reeducação alimentar;",
  "Associar alimentação ao exercício físico;",
  "Controlar colesterol total elevado e triglicérides;",
  "Reduzir gordura no fígado (Esteatose Hepática);",
  "Dietoterapia específica para doenças crônicas como Diabetes 2, Hipertensão, Hipotireoidismo;",
  "Tratar insônia;",
  "Tratar alterações gástrointestinais: Gastrite, Doença do refluxo gastroesofágico, Hernia de hiato, doenças inflamatórias intestinais, síndrome do intestino irritável, colite, disbiose;",
  "Tratar doenças ginecológicas mais comuns: Síndrome do Ovário policístico (SOP), Síndrome Pré Menstrual, Endometriose, Menopausa, Amenorreia;",
  "Tratar infecção urinária de repetição;",
  "Minimizar as sequelas pós Covid;",
];

interface IItWorksToThatOne {
  contextColor: string;
  contextColorContrast: string;
}

export default function ItWorksToThatOne({
  contextColor,
  contextColorContrast,
}: IItWorksToThatOne) {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {itWorksToThatOne.map(({ description, src, title }) => (
          <Styles.Paper key={title} bgColor={contextColorContrast}>
            <Image
              src={"./" + src}
              height="160"
              width="160"
              alt="ícone com passo"
            />
            <Typography variant="h3" color={contextColor} fontWeight="bold">
              {title}
            </Typography>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </Styles.Paper>
        ))}
      </Styles.Content>
      <Typography
        variant="h2"
        color={contextColorContrast}
        fontWeight="bold"
        textAlign="center"
      >
        E também para quem quer...
      </Typography>
      <Stack
        py="40px"
        color={"white"}
        spacing={2}
        direction="column"
        alignItems="left"
        textAlign="left"
        maxWidth={800}
      >
        {andAlsoWorksToThatOne.map((text) => (
          <Stack key={text} direction="row" spacing={2} fontWeight={900}>
            <CheckIcon />
            <p>{text}</p>
          </Stack>
        ))}
      </Stack>

      <WhatsAppBtn data-gt="whats-btn--adds" id="whats-btn--adds__it-works" />
    </Styles.Wrapper>
  );
}
