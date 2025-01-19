import { createTheme } from "@mui/material";
import { red, purple } from "@mui/material/colors";

export const theme = createTheme({
  colors: {
    primary: "#1F1F20",
    secondary: "#252527",
    accent: purple,
    font: "#FFFFFF",
  },
});

export const buttonTheme = createTheme({
  palette: {
    primary: purple,
    secondary: red,
  },
});
