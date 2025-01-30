import React from "react";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import styled from "styled-components";
import { Register } from "../../components/smartComponents/registration/Registration";
import { Entrance } from "../../components/smartComponents/entrance/Entrance";
import {
  ThemeContext,
  useTheme,
} from "../../components/smartComponents/context/ThemeContext";
import { theme } from "../../styles/Theme";

const SignUpPage = () => {
  const { isDark } = useTheme(ThemeContext);
  const classStyles = `header ${isDark ? "dark" : "light"}`;
  return (
    <StyledEntranceContainer className={classStyles}>
      <MainContainer
        direction='column'
        // justify='center'
        align='center'
        gap='40px'
        className='main'>
        <Register />
        <Entrance />
      </MainContainer>
    </StyledEntranceContainer>
  );
};

const StyledEntranceContainer = styled.div`
  height: calc(100dvh - 78px);
  display: flex;
  justify-content: center;
  padding-top: 115px;
  &.dark {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.font};
  
      button {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.accent};
        padding: 5px 10px;
      }
    }
    &.light {
      background-color: ${theme.colors.primaryLight};
      color: ${theme.colors.font};
  
      button {
        background-color: ${theme.colors.accentLight};
        border: 1px solid ${theme.colors.accentLight};
        color: ${theme.colors.font};
        padding: 5px 10px;
      }
    }
`;

export default SignUpPage;