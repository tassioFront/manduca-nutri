import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import Paper from "@/components/ui/Paper";

export const Styles = {
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Content: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacing-xlarge);
    width: 100%;

    ${greaterThan("tablet")`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: var(--spacing-giant);
  `}
  `,
  Paper: styled(Paper)`
    align-items: center;
    color: black;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-medium);
    max-width: 400px;
    margin: var(--spacing-base);
    width: 100%;

    h3 {
      font-size: var(--spacing-large);
      margin-bottom: var(--spacing-xlarge);

      ${greaterThan("tablet")`
        max-width: 500px;
        margin-bottom: var(--spacing-xxxlarge);
    `}
    }

    ${greaterThan("tablet")`
      max-width: 500px;
      padding: var(--spacing-large);
      
    `}
  `,
  PaperList: styled.div`
    align-items: center;
    display: flex;
    gap: var(--spacing-xsmall);
    margin-right: auto;
    margin-bottom: var(--spacing-medium);
  `,
};
