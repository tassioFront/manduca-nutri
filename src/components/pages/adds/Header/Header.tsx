import { colors } from "@/styles/theme";
import Typography from "@mui/material/Typography";
import { Styles } from "./styles";

const text = [
  {
    label: `
    Não perca mais tempo com dietas
    <span style="color: ${colors?.palette?.bgPink?.dark}">restritivas e desequilibradas!</span>`,
    variant: "h1",
    color: "white",
    textAlign: "center",
  },
  {
    label: `
    Se você está lutando com questões de saúde relacionadas a alimentação,
    eu vou te ajudar a encontrar soluções eficazes.`,
    variant: "body1",
    color: "white",
    textAlign: "center",
    fontWeight: "900",
  },
  {
    isWhats: true,
  },
  {
    label: `Um ambiente seguro e confidencial, para discutir suas preocupações
    nutricionais e de saúde.`,
    variant: "body1",
    color: "white",
    textAlign: "center",
    fontWeight: "900",
  },
];

export default function Header() {
  return (
    <Styles.Header>
      <Styles.Logo />
      <Styles.Intro>
        {text.map((tex) => (
          <div key={tex.label || "btn"}>
            {tex.isWhats ? (
              <Styles.WhatsAppBtn />
            ) : (
              <Typography
                variant={tex?.variant as "h1"}
                color={tex?.color as string}
                textAlign={tex?.textAlign as "center"}
                fontWeight={(tex?.fontWeight as string) ?? ""}
                dangerouslySetInnerHTML={{ __html: tex?.label as string }}
              />
            )}
          </div>
        ))}
      </Styles.Intro>
      <Styles.Image
        src="./manduca__no-bg.png"
        height="200"
        width="260"
        alt="Imagem da Nutri Tamires Manduca"
      ></Styles.Image>
    </Styles.Header>
  );
}
