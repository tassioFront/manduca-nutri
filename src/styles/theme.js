import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const colors = {
  palette: {
    primary: {
      main: "#00A884",
    },
    secondary: {
      main: "#2196F3",
    },
    error: {
      main: red.A400,
    },
    bgPink: {
      main: "#DD978D",
      mainContrast: "white",
      light: "#FFEEEB",
      dark: "#70241a",
    },
    premiumContext: {
      main: "#000",
      mainContrast: "#D1B27B",
    },
    pinkContext: {
      main: "#DD978D",
      mainContrast: "white",
      dark: "#70241a",
    },
  },
};

const theme = createTheme({ ...colors });
export { colors };
export default theme;
