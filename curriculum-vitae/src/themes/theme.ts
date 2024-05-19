import { createTheme } from "@mui/material/styles";
//  todo: maybe add dark/light themes
export const appTheme = createTheme({
  palette: {
    primary: {
      light: "#346d73",
      main: "#024950",
      dark: "#013338",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ab6b5c",
      main: "#964734",
      dark: "#693124",
      contrastText: "#000",
    },
  },
});
