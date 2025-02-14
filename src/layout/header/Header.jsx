import React from "react";
import styled from "styled-components";

import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import { theme } from "../../styles/Theme";
import {
  ThemeContext,
  useTheme,
} from "../../components/smartComponents/context/ThemeContext";
import { Logo } from "./headerIcons/Logo";
import { ThemeIcon } from "./headerIcons/ThemeIcon";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HamburgerMenu } from "../../components/smartComponents/hamburgerMenu/HamburgerMenu";

export const Header = () => {
  const { isDark } = useTheme(ThemeContext);

  return (
    <StyledHeader className={`${isDark ? "dark" : "light"}`}>
      <MainContainer>
        <StyledWrapper>
          <Logo />
          <ThemeIcon />
          {/* Гамбургер-меню для мобильных устройств */}
          <HamburgerMenu isDark={isDark} />

          {/* HeaderNav отображается только на экранах больше 520px */}
          <HeaderNavWrapper>
            <HeaderNav />
          </HeaderNavWrapper>
        </StyledWrapper>
      </MainContainer>
    </StyledHeader>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const HeaderNavWrapper = styled.div`
  @media (max-width: 520px) {
    display: none;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  &.dark {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font};

    button {
      background-color: transparent;
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.accent};
      padding: 5px 10px;
    }
  }
  &.light {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.accentLight};

    button {
      background-color: transparent;
      border: 1px solid ${theme.colors.accentLight};
      color: ${theme.colors.accentLight};
      padding: 5px 10px;
    }
  }
`;
