import PageHead from "@/components/pages/adds/Head/PageHead";
import Header from "@/components/pages/adds/Header/Header";
import { Container } from "@mui/material";
import { sections } from "@/components/pages/adds/helpers/sections";
import {
  bgContextColor,
  bgContextColorDark,
} from "@/components/pages/adds/helpers/contextColors";
import Styles from "./styles";

export default function HowItWorks() {
  const isEven = (index: number) => index % 2;
  return (
    <>
      <PageHead />
      <Container component="main" maxWidth="xl" disableGutters>
        <Header />
        {sections.map((section, index) => (
          <Styles.Section
            key={section.heading2}
            data-color={isEven(index) ? "white" : bgContextColorDark}
            data-bg={isEven(index) ? bgContextColor : "white"}
            heading2={section.heading2}
          >
            <section.children />
          </Styles.Section>
        ))}
      </Container>
    </>
  );
}
