import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import Image from "next/image";
import Instagram from "@/components/ui/Btns/Instagram";
import WhatsApp from "@/components/ui/Btns/WhatsApp";

export const Styles = {
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    color: black;
    flex-direction: column;
    text-align: center;
    width: 100%;

    ${greaterThan("desktop")`
      flex-direction: row;
    `}
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: var(--spacing-small);
    width: 100%;

    p {
      text-align: left;
      margin-bottom: var(--spacing-large);
    }

    ${greaterThan("desktop")`
      width: 50%;
    `}
  `,
  Instagram: styled(Instagram)`
    width: fit-content;
  `,
  WhatsApp: styled(WhatsApp)`
    width: fit-content;
  `,
  Image: styled(Image)`
    cursor: unset;
    object-position: bottom;

    ${greaterThan("tablet")`
      height: 560px;
      width: 50%;
    `}
  `,
};
