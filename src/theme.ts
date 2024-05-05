import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#f8f9f8",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {},
});

theme = responsiveFontSizes(theme);

export default theme;
