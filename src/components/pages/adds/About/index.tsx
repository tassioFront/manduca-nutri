import { Styles } from "./styles";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function About() {
  return (
    <Styles.Wrapper>
      <Styles.Image
        src="./manduca__perfil.png"
        height="300"
        width="300"
        alt="Imagem da Nutri Tamires Manduca"
      ></Styles.Image>
      <Styles.Content>
        <Typography variant="h2">Olá! Eu sou Tamires Manduca</Typography>
        <p>
          Na infância eu tinha muita dificuldade para me alimentar
          qualitativamente. Eu tinha muitas aversões alimentares. Então descobri
          a nutrição porque precisei passar com uma profissional.
        </p>
        <p>
          Hoje, após já ter trabalhado em três grandes hospitais em São Paulo,
          ajudo mulheres entre 18 e 55 anos, com os sintomas que cada fase da
          vida da mulher traz.
        </p>
        <p>
          Amenizo sintomas da TPM e menopausa, entre outros problemas como SOP,
          ansiedade. Esses e outros problemas de saúde afetam a vida sexual,
          social e familiar dessa mulher.
        </p>
        <p>
          A auto estima fica abalada, a maioria desenvolve compulsão alimentar,
          tornam-se obesas e está por aí sofrendo, triste e com auto estima no
          pé. Quiçá deprimidas além de tudo!
        </p>

        <p>
          Minha missão é aumentar a auto estima de mulheres que estão nessa
          situação.
        </p>
        <p>CRN3: 51021</p>
        <Stack
          direction="row"
          sx={{
            gap: "10px",
          }}
          justifyContent="flex-end"
          flexWrap="wrap"
        >
          <Styles.Instagram size="medium" />
          <Styles.WhatsApp
            label="Whatsapp"
            size="medium"
            id="whats-btn--adds__about"
          />
        </Stack>
      </Styles.Content>
    </Styles.Wrapper>
  );
}
