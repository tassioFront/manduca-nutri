import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

const Styles = {
  Wrapper: styled.div`
    background-color: ${(prop) => prop.color};
    border-radius: 16px;
    padding: var(--spacing-small);
    width: 100%;

    ${greaterThan("tablet")`
      padding: var(--spacing-base);
    `}
  `,
};

export default Styles;
