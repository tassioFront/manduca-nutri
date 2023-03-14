import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

const Styles = {
  Wrapper: styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    padding: var(--spacing-xxlarge) var(--spacing-xsmall) (--spacing-xxxlarge);
    flex-direction: column;

    ${greaterThan("tablet")`
      padding: var(--spacing-giant) var(--spacing-base) var(--spacing-xgiant);
    `}
  `,
  Header: styled.div`
    margin-bottom: var(--spacing-large);
    text-align: left;
    width: 100%;

    ${greaterThan("tablet")`
      margin-bottom: var(--spacing-xlarge);
    `}
  `,
};

export default Styles;
