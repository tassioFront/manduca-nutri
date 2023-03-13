import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";

interface IUIWhatsAppBtn {
  label?: string;
}

export default function UIWhatsAppBtn({ label, ...rest }: IUIWhatsAppBtn) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<WhatsAppIcon />}
      {...rest}
    >
      {label ?? "QUERO UMA AVALIAÇÃO GRÁTIS"}
    </Button>
  );
}
