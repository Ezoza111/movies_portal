import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/stupidComponents/logo/Logo";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import { Entrance } from "../../components/smartComponents/entrance/Entrance";
import SearchForm from "../../components/smartComponents/searchForm/SearchForm";
import { SignUpLink } from "../signUpPage/SignUpLink";
import { Link } from "react-router-dom";
import { FavoritesLink } from "../favoritesPage/FavoritesLink";
import { SignInLink } from "../signUpPage/SignInLink";
import { theme } from "../../styles/Theme";

export const Header = ({ userName, isDark}) => {
  return (
    <StyledHeader className={`header ${isDark ? 'dark' : 'light'}`}>
      <MainContainer direction={"row"} justify={"space-between"} align={"center"}>
        <Logo iconId={"logo"} />
        <SearchForm />
        <FavoritesLink />
        {userName === null ? <SignInLink />: <div>{`${userName}.`.toLocaleUpperCase()}</div>}
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

  &.dark {
    background-color: ${theme.colors.primary}
  }
  &.light {
    background-color: ${theme.colors.primaryLight}
  }
`;
