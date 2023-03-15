import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

const Styles = {
  Wrapper: styled.section`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: var(--spacing-xxlarge) var(--spacing-xsmall)
      var(--spacing-xxxlarge);
    width: 100%;

    ${greaterThan("tablet")`
      padding: var(--spacing-giant) var(--spacing-base) var(--spacing-xgiant);
    `}
  `,
  Header: styled.div`
    margin-bottom: var(--spacing-large);
    text-align: center;
    width: 100%;

    ${greaterThan("tablet")`
      margin-bottom: var(--spacing-xlarge);
    `}
  `,
};

export default Styles;
