import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/stupidComponents/logo/Logo";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import { FavoritesLink } from "../../components/stupidComponents/favorites/FavoritesLink";
import { Entrance } from "../../components/smartComponents/entrance/Entrance";
import SearchForm from "../../components/smartComponents/searchForm/SearchForm";
import { SignUp } from "../../components/smartComponents/signUp/SignUp";
import { Link } from "react-router-dom";

export const Header = () => {
  const [loginStatus, setLoginStatus] = React.useState(true);
  const loginStatusFalse = () => {
    setLoginStatus(false);
  };
  const loginStatusTrue = () => {
    setLoginStatus(true);
  };

  return (
    <StyledHeader className='header'>
      <MainContainer
        direction={"row"}
        justify={"space-between"}
        align={"center"}>
        <Link to='/'>
          <Logo iconId={"logo"} />
        </Link>
        <SearchForm />
        <FavoritesLink />
        <Entrance
          loginStatusTrue={loginStatusTrue}
          loginStatusFalse={loginStatusFalse}
        />
        {loginStatus ? (
          <SignUp
            loginStatusTrue={loginStatusTrue}
            loginStatusFalse={loginStatusFalse}
          />
        ) : (
          ""
        )}
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
`;
