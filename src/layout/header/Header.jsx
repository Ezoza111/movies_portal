import React from "react";
import styled from "styled-components";

import { Logo } from "../../components/stupidComponents/logo/Logo";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import SearchForm from "../../components/smartComponents/searchForm/SearchForm";
import { SignUpLink } from "../signUpPage/SignUpLink";
import { FavoritesLink } from "../favoritesPage/FavoritesLink";
import { SignInLink } from "../signUpPage/SignInLink";
import { theme } from "../../styles/Theme";
import { useTheme } from "../../components/smartComponents/context/ThemeContext";
import { ThemeIcon } from "../../components/stupidComponents/themeIcon/ThemeIcon";
import { SignIn } from "./headerNav/SignIn";

export const Header = ({ userName, changeUserStatus}) => {
  const {isDark} = useTheme();
  const classStyles = `header ${isDark ? 'dark' : 'light'}`;

  return (
    <StyledHeader className={classStyles}>
      <MainContainer>
        <Logo classStyle={isDark}/>
        <ThemeIcon />
        {/* <SearchForm /> */}
        <FavoritesLink />
        <SignIn userName={userName} changeUserStatus={changeUserStatus} />
        <SignUpLink />
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
