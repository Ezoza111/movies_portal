import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/stupidComponents/logo/Logo";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import { SignUpLink } from "../signUpPage/SignUpLink";
import { FavoritesLink } from "../favoritesPage/FavoritesLink";
import { SignInLink } from "../signUpPage/SignInLink";
import { theme } from "../../styles/Theme";
import { useTheme } from "../../components/smartComponents/context/ThemeContext";
import { ThemeIcon } from "../../components/stupidComponents/icon/ThemeIcon";

export const Header = ({ userName }) => {
  const { isDark } = useTheme();
  return (
    <StyledHeader className={`header ${isDark ? "dark" : "light"}`}>
      <MainContainer
        direction={"row"}
        justify={"space-between"}
        align={"center"}>
        <Logo iconId={"logo"} />
        <StyledWrapper>
          <ThemeIcon />
          <FavoritesLink />
          {/* {userName === null ? <SignInLink />: <div>{`${userName}`.toLocaleUpperCase()}</div>} */}
          {userName !== null && <p style={{fontWeight: 'bold'}}>{`${userName}`.toLocaleUpperCase()}</p>}
          <SignUpLink />
        </StyledWrapper>
      </MainContainer>
    </StyledHeader>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  border: 1px solid red;
  display: flex;
  align-items: center;

  &.dark {
    background-color: ${theme.colors.primary};
  }
  &.light {
    background-color: ${theme.colors.primaryLight};
  }
`;
