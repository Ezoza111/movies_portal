import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GLobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.font};
}
main {
  height: 100%;
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
