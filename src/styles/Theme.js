import { createTheme } from "@mui/material";
import { red, purple } from "@mui/material/colors";

export const theme = createTheme({
  colors: {
    primary: "#1F1F20",
    secondadry: "#252527",
    accent: purple,
    font: "#FFFFFF",
  },
});
export const butonTheme = createTheme({
  palette: {
    primary: purple,
    secondadry: red,
  },
});
