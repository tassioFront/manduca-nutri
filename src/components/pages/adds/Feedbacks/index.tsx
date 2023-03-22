import { Styles } from "./styles";
import { Typography, Avatar, Divider } from "@mui/material";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";

const feedbacks = [
  {
    name: "Laís Escorcio",
    description:
      "Tamires é uma excelente nutricionista! Sempre preocupada em explicar, dar opções de cardápio e nos fazer entender que comer bem não tem nada a ver com alimentação restritiva! Alcancei excelentes resultados com o auxílio dela!",

    src: "feed-1.jpeg",
    alt: "Foto de Laís Escorcio - paciente",
  },
  {
    name: "Carolina Pires",
    src: "feed-2.jpeg",
    alt: "Foto de Carolina Pires - paciente",
    description:
      "Tamires muito obrigada pelo plano alimentar que você fez pra mim. Já estou seguindo ele a um mês e estou ótima. Não sinto mais aqueles sintomas por causa da minha glicemia. Agora tenho qualidade de vida!!!",
  },
];

export default function Feedbacks() {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {feedbacks.map(({ description, name, alt, src }) => (
          <Styles.Stack key={name}>
            <Avatar
              alt={alt}
              src={src}
              sx={{ width: 85, height: 85, marginBottom: "15px" }}
            />
            <Typography variant="h3" color="white" fontWeight="bold">
              {name}
            </Typography>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </Styles.Stack>
        ))}
      </Styles.Content>
      <WhatsAppBtn />
    </Styles.Wrapper>
  );
}
