import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";

export const Styles = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 100%;
  `,
  Accordion: styled(Accordion)`
    width: 100%;

    h3 {
      margin: 0 !important;
    }

    ${greaterThan("desktop")`
       max-width: 600px;
    `}
  `,
};
