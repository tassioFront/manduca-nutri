import { colors } from "@/styles/theme";
import Styles from "./styles";

interface PaperTypes {
  children: JSX.Element | JSX.Element[] | string;
  variant?: "default" | "adds";
  bgColor: string;
}
export default function Paper({
  children,
  variant = "default",
  bgColor,
  ...rest
}: PaperTypes) {
  return (
    <Styles.Wrapper color={bgColor} {...rest}>
      {children}
    </Styles.Wrapper>
  );
}
