import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b8860b", // dourado
    },
    error: {
      main: "#d32f2f", // vermelho padrão MUI
      contrastText: "#fff", // cor do texto
    },
    success: {
      main: "#2e7d32", // verde sucesso
      contrastText: "#fff",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        filledError: {
          color: "#fff", // texto branco
          backgroundColor: "#d32f2f",
        },
        filledSuccess: {
          color: "#fff", // texto branco
          backgroundColor: "#2e7d32",
        },
      },
    },
  },
});

export default theme;