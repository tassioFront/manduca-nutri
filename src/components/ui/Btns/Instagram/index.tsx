import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";

export default function UInstagramBtn({ ...rest }) {
  return (
    <Button
      sx={{
        minWidth: "auto",
        textTransform: "none",
      }}
      variant="contained"
      color="secondary"
      disableElevation
      startIcon={<InstagramIcon />}
      href="https://www.instagram.com/nutri.tamimanduca"
      target="_blank"
      size="large"
      {...rest}
    >
      Instagram
    </Button>
  );
}
