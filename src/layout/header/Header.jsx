import React, { useEffect } from "react";
import styled from 'styled-components'
import { Logo } from '../../components/stupidComponents/logo/Logo'
import { MainContainer } from '../../components/stupidComponents/container/MainContainer.styled'
import { Favorites } from '../../components/stupidComponents/favorites/Favorites'
import { Login } from '../../components/smartComponents/login/Login'
import { Entrance } from '../../components/smartComponents/entrance/Entrance'
//import { Username } from "../../components/stupidComponents/username/Username";




export const Header = () => {
  // const [loginStatus, setLoginStatus] = React.useState(false);
 const [key, setKey] = React.useState([]);
  // const loginStatusFalce = () => {setLoginStatus(false)}
  const arr = localStorage.getItem('user');
  return (
    <StyledHeader className='header'>
      <MainContainer direction={'row'} justify={'space-between'} align={'center'}>
        <Logo iconId={'logo'}/>
        <Favorites/>
        <Entrance arrayUserLocalStorage = {arr}/>
        <Login arrayUserLocalStorage = {key} setArray= {setKey}/>
        {// localStorage.getItem('user') ? <Username/> : <><Entrance /><Login /></>
        }
        {// loginStatus === true ? <Username changeLoginStatus={loginStatusFalce}/> : <><Entrance /><Login /></>
        }
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