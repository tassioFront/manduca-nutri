import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageHead from "@/components/pages/adds/Head/PageHead";
import Header from "@/components/pages/adds/Header/Header";
import { Container } from "@mui/material";
import { sections } from "@/components/pages/adds/helpers/sections";
import Section from "@/components/ui/Section";

const inter = Inter({ subsets: ["latin"] });

export default function HowItWorks() {
  return (
    <>
      <PageHead />
      <Container component="main" maxWidth="xl" disableGutters>
        <Header />
        {sections.map((section) => (
          <Section key="asda" heading2={section.heading2}>
            <section.children />
          </Section>
        ))}
      </Container>
    </>
  );
}
