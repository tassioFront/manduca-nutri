import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";
import Paper from "@/components/ui/Paper";

export const Styles = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;

    ${greaterThan("desktop")`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    `}
  `,
  Paper: styled(Paper)`
    align-items: center;
    color: white;
    display: flex;
    max-width: 400px;
    margin: var(--spacing-base);
    min-height: 235px;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;

    ${greaterThan("tablet")`
      max-width: 280px;
    `}
  `,
};
