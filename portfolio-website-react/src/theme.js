import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  palette: {
    primary: { main: "#112D4E" },
    secondary: { main: "#3F72AF" },
    background: { default: "#F9F7F7" },
  },
});
