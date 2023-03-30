import PageHead from "@/components/pages/adds/Head/PageHead";
import Header from "@/components/pages/adds/Header/Header";
import { Container } from "@mui/material";
import { defineContext } from "@/components/pages/adds/helpers/sections";
import Styles from "./styles";
import Footer from "@/components/pages/adds/Footer/Footer";
import { colors } from "@/styles/theme";

export default function Adds() {
  const isEven = (index: number) => index % 2;
  const sections = defineContext();

  return (
    <>
      <PageHead />
      <Container component="main" maxWidth="xl" disableGutters>
        <Header
          contextColor={colors.palette.pinkContext.main}
          contextColorContrast={colors.palette.pinkContext.dark}
        />
        {sections.map((section, index) => (
          <Styles.Section
            key={index}
            data-color={section.contextColorContrast}
            data-bg={section.contextColor}
            heading2={section.heading2}
          >
            <section.children
              contextColor={section.contextColor}
              contextColorContrast={section.contextColorContrast}
            />
          </Styles.Section>
        ))}
        <Footer />
      </Container>
    </>
  );
}
