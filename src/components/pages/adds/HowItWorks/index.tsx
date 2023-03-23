import { Styles } from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";

const howItWorks = [
  {
    title: "Contato via whats",
    description: "Você entra em contato via whats para tirarmos suas dúvidas.",
  },
  {
    title: "Agendamento",
    description:
      "Agendaremos nossa <strong>primeira consulta online</strong> de acordo com sua preferencia, disponibilidade e nossa grade de atendimento",
  },
  {
    title: "Primeira consulta",
    description:
      "Nos conheceremos melhor! Vamos entender <strong>seus objetivos, desejos e definir seus próximos passos.</strong>",
  },
];

export default function HowItWorks() {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {howItWorks.map(({ description, title }, index) => (
          <Styles.Paper key={title}>
            <Image
              src={`./icone-${index + 1}.png`}
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
    </Styles.Wrapper>
  );
}
