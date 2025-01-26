import { createTheme } from "@mui/material";
import { red, purple } from "@mui/material/colors";

export const theme = createTheme({
  colors: {
    primary: '#1F1F20',
    secondary: '#252527', 
    accent: '#ffea00',
    font: '#FFFFFF',
    primaryLight: '#dc99c1',
    fontLight: '#1F1F20',
    accentLight: '#93107b',
  },
});

export const buttonTheme = createTheme({
  palette: {
    primary: purple,
    secondary: red,
  },
});
