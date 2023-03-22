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
];

export default function QAndA() {
  return (
    <Styles.Wrapper>
      {qa.map(({ title, description }) => (
        <Styles.Accordion color="white" key={description}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={description}
            id={title}
          >
            <Typography variant="h3" color="white" fontWeight="bold">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </AccordionDetails>
        </Styles.Accordion>
      ))}
    </Styles.Wrapper>
  );
}
