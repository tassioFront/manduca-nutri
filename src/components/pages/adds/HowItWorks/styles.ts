import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import Paper from "@/components/ui/Paper";
import { bgContextColor } from "../helpers/contextColors";

export const Styles = {
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    color: ${bgContextColor};
    flex-direction: column;
    text-align: center;
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
      align-items: flex-start;
      margin-bottom: var(--spacing-giant);
  `}
  `,
  Paper: styled(Paper)`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-medium);
    max-width: 400px;
    margin: var(--spacing-base);
    width: 100%;

    h3 {
      background-color: ${bgContextColor};
      font-size: var(--spacing-large);
      margin-bottom: var(--spacing-xlarge);

      ${greaterThan("tablet")`
        margin-bottom: var(--spacing-xxxlarge);
    `}
    }

    ${greaterThan("tablet")`
      max-width: 500;
      padding: var(--spacing-large);
    `}
  `,
};
