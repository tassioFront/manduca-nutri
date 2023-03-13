import { Styles } from "./styles";

interface IUIHeader {
  children: JSX.Element | JSX.Element[];
}

export default function UIHeader({ children, ...rest }: IUIHeader) {
  return <Styles.Header {...rest}>{children}</Styles.Header>;
}
