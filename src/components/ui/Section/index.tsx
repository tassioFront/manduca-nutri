import Styles from "./styles";

interface SectionTypes {
  children: JSX.Element | JSX.Element[];
  heading2?: string;
}
export default function Section({ children, heading2, ...rest }: SectionTypes) {
  return (
    <Styles.Wrapper {...rest}>
      {heading2 && (
        <Styles.Header>
          <h2>{heading2}</h2>
        </Styles.Header>
      )}
      {children}
    </Styles.Wrapper>
  );
}
