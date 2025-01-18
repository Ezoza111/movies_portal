import React from "react";
import styled from 'styled-components'
import { Logo } from '../../components/stupidComponents/logo/Logo'
import { MainContainer } from '../../components/stupidComponents/container/MainContainer.styled'
import { Favorites } from '../../components/stupidComponents/favorites/Favorites'
import { Login } from '../../components/smartComponents/login/Login'
import { Entrance } from '../../components/smartComponents/entrance/Entrance'
import { ExitAccaunt } from "../../components/stupidComponents/exitAccaunt/exitAccaunt";






export const Header = () => {
   const [loginStatus, setLoginStatus] = React.useState(true);
   const loginStatusFalse = () => {
    setLoginStatus(false)
  };
  const loginStatusTrue= () => {
    setLoginStatus(true)
  };

  return (
    <StyledHeader className='header'>
      <MainContainer direction={'row'} justify={'space-between'} align={'center'}>
        <Logo iconId={'logo'}/>
        <Favorites/>
        <Entrance  loginStatusTrue = {loginStatusTrue} loginStatusFalse= {loginStatusFalse}/>
        {loginStatus ? <Login loginStatusTrue = {loginStatusTrue} loginStatusFalse= {loginStatusFalse}/>: ''}
      </MainContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    border: 1px solid red;
    display: flex;
    align-items: center;
`