import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { theme } from "../../../styles/Theme";

const Pagination = ({ currentPage, numOfPages, onNext, onPrev }) => {
  const { isDark } = useContext(ThemeContext);

  const handleNext = () => {
    onNext();
    window.scrollTo(0, 0); // Прокрутка наверх
  };

  const handlePrev = () => {
    onPrev();
    window.scrollTo(0, 0); // Прокрутка наверх
  };
  return (
    <StyledPagination>
      <button
        className={`${isDark ? "dark" : "light"}`}
        onClick={handlePrev}
        disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        Page {currentPage} from {numOfPages}
      </span>
      <button
        className={`${isDark ? "dark" : "light"}`}
        onClick={handleNext}
        disabled={currentPage === numOfPages}>
        Next
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  button.dark {
    background-color: ${theme.colors.accent};
    color: #000000;
  }
  button.light {
    background-color: ${theme.colors.accentLight};
    color: ${theme.colors.font};
  }
  span {
    padding: 5px;
  }
`;

export default Pagination;
