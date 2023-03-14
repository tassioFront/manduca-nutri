import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";

interface IUIWhatsAppBtn {
  label?: string;
}

export default function UIWhatsAppBtn({ label, ...rest }: IUIWhatsAppBtn) {
  return (
    <Button
      sx={{
        minWidth: "auto",
        textTransform: "capitalize",
        width: "100% !important",
      }}
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<WhatsAppIcon />}
      {...rest}
    >
      <span>{label ?? "Quero uma avaliação grátis"}</span>
    </Button>
  );
}
