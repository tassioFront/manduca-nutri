import { PaletteOptions } from "@mui/material/styles";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      bgPink: {
        main: string;
        dark: string;
        mainContrast: string;
      };
    };
  }
}
declare module "emotion-media-query";
