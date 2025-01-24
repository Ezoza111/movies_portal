import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/Theme";
import CircularProgress from "@mui/material/CircularProgress";

// Анимация вращения
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Стили для контейнера лоадера
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  // height: 100vh;
`;

// Анимированный круговой элемент
const AnimatedCircle = styled(CircularProgress)`
  animation: ${rotate} 2s linear infinite;
  color: ${theme.colors.accent[500]};
  width: 80px !important;
  height: 80px !important;
`;

// Лоадер с текстом
const LoaderText = styled.p`
  font-size: 18px;
  color: ${theme.colors.accent[500]};
  margin-top: 20px;
`;

// Основной компонент лоадера
const CustomLoader = () => {
  return (
    <LoaderContainer>
      <div style={{ textAlign: "center" }}>
        <AnimatedCircle color="unset" />
        {/* <LoaderText>Loading, please wait...</LoaderText> */}
      </div>
    </LoaderContainer>
  );
};

export default CustomLoader;
