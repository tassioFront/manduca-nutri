import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

export const Styles = {
  Header: styled.header`
    padding: var(--spacing-xsmall) var(--spacing-xsmall) 0;

    ${greaterThan("mobile")`
      padding: var(--spacing-small) var(--spacing-small) 0;
    `}
  `,
};
