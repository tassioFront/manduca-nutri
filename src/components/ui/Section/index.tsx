import { Typography } from "@mui/material";
import Styles from "./styles";

interface SectionTypes {
  children: JSX.Element | JSX.Element[];
  heading2?: string;
  heading2Align?: "center" | "left" | "right";
}
export default function Section({
  children,
  heading2,
  heading2Align = "center",
  ...rest
}: SectionTypes) {
  return (
    <Styles.Wrapper {...rest}>
      {heading2 && (
        <Styles.Header>
          <Typography variant="h2" textAlign={heading2Align}>
            {heading2}
          </Typography>
        </Styles.Header>
      )}
      {children}
    </Styles.Wrapper>
  );
}
