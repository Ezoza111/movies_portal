import { dark } from "@mui/material/styles/createPalette";
import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { ThemeContext } from "../context/ThemeContext";

function ErrorFallback({ error, resetErrorBoundary }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledErrorBoundary
      role="alert"
      className={`errorBoundary ${isDark ? "dark" : "light"}`}
    >
      <p>Something went wrong: </p>
      <p style={{ color: "red" }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </StyledErrorBoundary>
  );
}

export { ErrorFallback };

const StyledErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px;

  &.dark {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font};

      button {
        background-color: transparent;
        color: ${theme.colors.accent};
        border: 1px solid ${theme.colors.accent};
        width: 50%;
        padding: 1em;
        font-size: 2em;
      }

      p{
        font-size: 2em;
        color: ${theme.colors.accent};
      }
    }
  &.light {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.accentLight};

    button {
      background-color: transparent;
      border: 1px solid ${theme.colors.accentLight};
      color: ${theme.colors.accentLight};
      width: 50%;
      padding: 1em;
      font-size: 2em;
    }
    p {
      font-size: 2em;
      color: ${theme.colors.accentLight};
    }
  }
`;
