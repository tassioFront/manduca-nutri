import { Typography } from "@mui/material";
import { Styles } from "./styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const qa = [
  {
    title: "Onde são realizadas as consultas online?",
    description:
      "Nossas consultas onlines serão através das plataformas Google Meets ou Zoom.",
  },
  {
    title: "Quais as formas de pagamento?",
    description:
      "No momento, estamos trabalhando com Cartão de crédito, PIX, boletos e transferências.",
  },
  {
    title: "Qual a duração das consultas?",
    description:
      "As consultas podem durar até 1h. Conforme formos evoluindo, os retorno podem ser mais rápidos.",
  },
  {
    title: "Aceita convênio?",
    description:
      "Após o pagamento da consulta, nós geramos um recibo que você pode usar pra solicitar reembolso. Consulte seu convênio para mais informações.",
  },
  {
    title: "Como funciona a Avaliação grátis?",
    description:
      "É uma conversa de 15min, sem compromisso, para nos conhecermos melhor. É um oportunidade para que você tire as dúvidas que tem sobre o meu trabalho e entendermos como eu posso te ajudar.",
  },
];

interface IQandA {
  contextColor: string;
  contextColorContrast: string;
}

export default function QAndA({ contextColor, contextColorContrast }: IQandA) {
  return (
    <Styles.Wrapper>
      {qa.map(({ title, description }) => (
        <Styles.Accordion
          sx={{ backgroundColor: contextColorContrast }}
          color={contextColor}
          key={description}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: contextColor }} />}
            aria-controls={description}
            id={title}
            title={`Exibir resposta da pergunta: ${title}`}
          >
            <Typography variant="h3" color={contextColor} fontWeight="bold">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              dangerouslySetInnerHTML={{ __html: description }}
              color={contextColor}
            />
          </AccordionDetails>
        </Styles.Accordion>
      ))}
    </Styles.Wrapper>
  );
}
