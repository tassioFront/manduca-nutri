import Typography from "@mui/material/Typography";
import { bgContextColorDark } from "../helpers/contextColors";
import { Styles } from "./styles";

const text = (context: string) => {
  return [
    {
      label: `
    <span style="color: ${context}">Não perca mais tempo</span> com dietas
    restritivas e desequilibradas!`,
      variant: "h1",
      color: "white",
      textAlign: "center",
    },
    // {
    //   label: `
    //   Se você está lutando com questões de saúde relacionadas a alimentação,
    //   eu vou te ajudar a encontrar soluções eficazes.`,
    //   variant: "body1",
    //   color: "white",
    //   textAlign: "center",
    //   fontWeight: "900",
    // },
    {
      label: `Um ambiente seguro e confidencial, para discutir suas preocupações
    nutricionais e de saúde.`,
      variant: "body1",
      color: "white",
      textAlign: "center",
      fontWeight: "900",
    },
    {
      isWhats: true,
    },
  ];
};

interface IHeader {
  contextColor: string;
  contextColorContrast: string;
}

export default function Header({
  contextColor,
  contextColorContrast,
}: IHeader) {
  return (
    <Styles.Header style={{ backgroundColor: contextColor }}>
      <Styles.Logo />
      <Styles.Intro>
        {text(contextColorContrast).map((tex) => (
          <div key={tex.label || "btn"}>
            {tex.isWhats ? (
              <Styles.WhatsAppBtn
                data-gt="whats-btn--adds"
                id="whats-btn--adds__header"
              />
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
