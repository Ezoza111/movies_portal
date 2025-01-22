import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/stupidComponents/logo/Logo";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import { FavoritesLink } from "../../components/stupidComponents/favorites/FavoritesLink";
import { Entrance } from "../../components/smartComponents/entrance/Entrance";
import SearchForm from "../../components/smartComponents/searchForm/SearchForm";
import { SignUpLink } from "../signUpPage/SignUpLink";

export const Header = ({userStatusOut, changeUserStatus}) => {
  const [loginStatus, setLoginStatus] = React.useState(true);
  const loginStatusFalse = () => {
    setLoginStatus(false);
  };
  const loginStatusTrue = () => {
    setLoginStatus(true);
  };

  return (
    <StyledHeader className='header'>
      <MainContainer direction={"row"} justify={"space-between"} align={"center"}>
        <Logo iconId={"logo"} />
        <SearchForm />
        <FavoritesLink />
        <Entrance userStatusOut = {userStatusOut} changeUserStatus={changeUserStatus}/>
{/*         
        {loginStatus ? (
          <SignUp loginStatusTrue={loginStatusTrue} loginStatusFalse={loginStatusFalse}/>
        ) : (
          ''
        )} */}
        {userStatusOut ? <SignUpLink /> : null}
        
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
