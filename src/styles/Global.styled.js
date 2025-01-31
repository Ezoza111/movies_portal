import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.font};
}
a {
    text-decoration: none;
}
ul {
    list-style: none
}
button {
    border: none;
}
input {
    border: none;
    font-family: inherit;
}
`;
