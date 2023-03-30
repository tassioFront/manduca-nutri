import { Styles } from "./styles";
import { Typography, Avatar } from "@mui/material";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";
import Image from "next/image";

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

const instaFeedbacks = [
  "./insta-feed-1.jpeg",
  "./insta-feed-2.jpeg",
  "./insta-feed-3.jpeg",
];

interface IFeedbacks {
  contextColorContrast: string;
}

export default function Feedbacks({ contextColorContrast }: IFeedbacks) {
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
            <Typography
              variant="h3"
              color={contextColorContrast}
              fontWeight="bold"
            >
              {name}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: description }}
              color={contextColorContrast}
            />
          </Styles.Stack>
        ))}
      </Styles.Content>
      <WhatsAppBtn data-gt="whats-btn--adds" id="whats-btn--adds__feedbacks" />
      <Styles.InstaFeedBacks>
        {instaFeedbacks.map((feed) => (
          <Image
            key={feed}
            src={feed}
            height="420"
            width="240"
            alt="Feedback de paciente compartilhado no instagram"
          />
        ))}
      </Styles.InstaFeedBacks>
    </Styles.Wrapper>
  );
}
