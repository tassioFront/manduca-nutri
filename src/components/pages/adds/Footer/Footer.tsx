import { Styles } from "./styles";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <Styles.Footer>
      <Logo />
      <div>
        <p>
          Copyright © <span>{new Date().getFullYear()}</span>
        </p>
        <p>Todos os direitos reservados.</p>
      </div>
    </Styles.Footer>
  );
}
