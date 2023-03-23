import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, ButtonTypeMap } from "@mui/material";

interface IUIWhatsAppBtn {
  label?: string;
  size?: ButtonTypeMap["props"]["size"];
}

export default function UIWhatsAppBtn({
  label,
  size = "large",
  ...rest
}: IUIWhatsAppBtn) {
  return (
    <Button
      sx={{
        minWidth: "auto",
        textTransform: "none",
      }}
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<WhatsAppIcon />}
      size={size}
      target="_blank"
      href="https://hotm.art/a24zaemg"
      {...rest}
    >
      <span>{label ?? "Quero uma avaliação grátis"}</span>
    </Button>
  );
}
