import React from "react";
import styled from "styled-components";

import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import SearchForm from "../../components/smartComponents/searchForm/SearchForm";
import { theme } from "../../styles/Theme";
import { ThemeContext, useTheme } from "../../components/smartComponents/context/ThemeContext";
import { Logo } from "./headerIcons/Logo";
import { ThemeIcon } from "./headerIcons/ThemeIcon";
import { HeaderNav } from "./headerNav/HeaderNav";

export const Header = ({ userName, changeUserStatus}) => {
  const {isDark} = useTheme(ThemeContext);
  const classStyles = `header ${isDark ? 'dark' : 'light'}`;

  return (
    <StyledHeader className={classStyles}>
      <MainContainer>
        <Logo/>
        <ThemeIcon />
        {/* <SearchForm /> */}
        <HeaderNav userName={userName} changeUserStatus={changeUserStatus} />
      </MainContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  border: 1px solid red;
  display: flex;
  align-items: center;

  div {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &.dark {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font};

    button {
      background-color: transparent;
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.accent};
    }
  }
  &.light {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.accentLight};

    button {
      background-color: transparent;
      border: 1px solid ${theme.colors.accentLight};
      color: ${theme.colors.accentLight};
    }
  }
`;
