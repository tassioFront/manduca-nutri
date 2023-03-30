import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";

export const Styles = {
  Footer: styled.footer`
    align-items: center;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-base);
    min-height: 200px;
    gap: var(--spacing-giant);
    text-align: center;
    width: 100%;

    ${greaterThan("desktop")`
      flex-direction: row;
      justify-content: space-between;
      padding: var(--spacing-xxlarge);
    `}
  `,
  WhatsAppBtn: styled(WhatsAppBtn)`
    margin: var(--spacing-base) 0;
  `,
};
