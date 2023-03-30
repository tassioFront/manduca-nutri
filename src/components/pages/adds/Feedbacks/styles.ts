import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Styles = {
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    /* color: white; */
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
    text-align: left;

    ${greaterThan("tablet")`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: var(--spacing-giant);
  `}
  `,
  Stack: styled(Stack)`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-medium);
    max-width: 400px;
    margin: var(--spacing-base);
    width: 100%;

    h3 {
      font-size: var(--spacing-large);
    }

    ${greaterThan("tablet")`
      padding: var(--spacing-large);
    `}
  `,
  InstaFeedBacks: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-base);
    padding: var(--spacing-base);
    margin-top: var(--spacing-base);

    ${greaterThan("tablet")`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: var(--spacing-giant);
  `}
  `,
};
