import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, ButtonTypeMap } from "@mui/material";

interface IUIWhatsAppBtn {
  label?: string;
  id: string;
  size?: ButtonTypeMap["props"]["size"];
}

// function gtag_report_conversion(url) {
//   var callback = function () {
//     if (typeof(url) != 'undefined') {
//       window.location = url;
//     }
//   };
//   gtag('event', 'conversion', {
//       'send_to': 'AW-11056675990/1ItCCIHm04YYEJb5nZgp',
//       'event_callback': callback
//   });
//   return false;
// }

export default function UIWhatsAppBtn({
  label,
  id,
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
      id={id}
      title="Falar com Nutri Tamires Manduca via whatsapp"
      target="_blank"
      href="https://hotm.art/a24zaemg"
      {...rest}
    >
      <span>{label ?? "Quero uma avaliação grátis *"}</span>
      {!label ? (
        <span
          style={{
            position: "absolute",
            top: "110%",
            fontSize: "12px",
            left: "0",
          }}
        >
          * Consulta de 15min para nos conhecermos
        </span>
      ) : (
        ""
      )}
    </Button>
  );
}
