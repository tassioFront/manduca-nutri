import { bgPinkLinearGradient } from "@/styles/customBackground";
import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";

export const Styles = {
  Header: styled(Header)`
    color: white !important;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: ${bgPinkLinearGradient()};
    padding-bottom: 0px;

    & p {
      margin: var(--spacing-medium) !important;
    }

    ${greaterThan("desktop")`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    `}
  `,
  Intro: styled.div`
    max-width: 600px;
  `,
  Logo: styled(Logo)`
    align-self: flex-start;
    width: 100%;
  `,
  Image: styled(Image)`
    cursor: unset;
    object-fit: contain;
    object-position: bottom;

    ${greaterThan("tablet")`
      height="200"
      width="350"
    `}

    ${greaterThan("desktop")`
      height: 560px;
      width: 460px;
    `}
  `,
  WhatsAppBtn: styled(WhatsAppBtn)`
    margin: var(--spacing-base) 0;
  `,
};
