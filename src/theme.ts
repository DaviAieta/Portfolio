import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Desabilita o ripple effect para todos os componentes que o utilizam, como os itens do menu
      },
    },
  },
  palette: {
    primary: {
      main: "#f8f9f8",
    },
    secondary: {
      main: "#147EFB",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
