import { colors } from "@/styles/theme";
import Typography from "@mui/material/Typography";
import { Styles } from "./styles";

const text = [
  {
    label: `
    Não perca mais tempo com dietas
    <span style="color: ${colors?.palette?.bgPink?.dark}">restritivas e desequilibradas!</span>`,
    variant: "h1" as "h1",
    color: "white",
    textAlign: "center" as "center",
  },
  {
    label: `
    Se você está lutando com questões de saúde relacionadas a alimentação,
    eu vou te ajudar a encontrar soluções eficazes.`,
    variant: "body1" as "body1",
    color: "white",
    textAlign: "center" as "center",
    fontWeight: "900",
  },
  {
    label: `Em um ambiente seguro e confidencial, para discutir suas preocupações
    nutricionais e de saúde.`,
    variant: "body1" as "body1",
    color: "white",
    textAlign: "center" as "center",
    fontWeight: "900",
  },
];

export default function Header() {
  return (
    <Styles.Header>
      <Styles.Logo />
      <Styles.Intro>
        {text.map((tex) => (
          <Typography
            key={tex.label}
            variant={tex.variant}
            color={tex.color}
            textAlign={tex.textAlign}
            fontWeight={tex.fontWeight ?? ""}
            dangerouslySetInnerHTML={{ __html: tex.label }}
          />
        ))}
        <Styles.WhatsAppBtn />
      </Styles.Intro>
      <Styles.Image
        src="./manduca__no-bg.png"
        height="200"
        width="350"
        alt="äsas"
      ></Styles.Image>
    </Styles.Header>
  );
}
