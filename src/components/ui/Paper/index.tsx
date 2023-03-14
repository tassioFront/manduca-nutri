import { colors } from "@/styles/theme";
import Styles from "./styles";

interface PaperTypes {
  children: JSX.Element | JSX.Element[] | string;
  variant: "default" | "adds";
}
export default function Paper({
  children,
  variant = "default",
  ...rest
}: PaperTypes) {
  return (
    <Styles.Wrapper
      color={variant === "default" ? "white" : colors.palette.bgPink.main}
      {...rest}
    >
      {children}
    </Styles.Wrapper>
  );
}
