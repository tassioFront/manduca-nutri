import { Styles } from "./styles";
import Woman2Icon from "@mui/icons-material/Woman2";
import DevicesIcon from "@mui/icons-material/Devices";
import PushPinIcon from "@mui/icons-material/PushPin";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const topics = [
  {
    Icon: Woman2Icon,
    label: "Foco na saúde da <strong>mulher</strong>",
  },
  {
    Icon: DevicesIcon,
    label:
      "Consultas <strong>online</strong> de 1h de duração: No conforto e segurança da sua casa",
  },
  {
    Icon: PushPinIcon,
    label: "Plano alimentar <strong>individualizado</strong>",
  },
  {
    Icon: PhoneIphoneIcon,
    label:
      "Plano alimentar, receitinhas, chat e muito mais. Tudo via <strong>aplicativo</strong>",
  },
];

export default function Topics() {
  return (
    <Styles.Wrapper>
      {topics.map(({ Icon, label }) => (
        <Styles.Paper key={label} variant="adds">
          <Icon sx={{ fontSize: "80px", marginBottom: "20px" }} />
          <p dangerouslySetInnerHTML={{ __html: label }}></p>
        </Styles.Paper>
      ))}
    </Styles.Wrapper>
  );
}
