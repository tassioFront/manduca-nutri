import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

export const Styles = {
  Header: styled.header`
    padding: var(--spacing-xsmall) var(--spacing-xsmall) 0;
    background: linear-gradient(#dd978d, #dd978d, #ffeeeb);

    ${greaterThan("mobile")`
      padding: var(--spacing-small) var(--spacing-small) 0;
    `}
  `,
};
