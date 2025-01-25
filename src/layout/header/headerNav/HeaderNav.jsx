import React from 'react';
import { useNavigate } from "react-router-dom";
import { MyButton } from '../../../components/stupidComponents/button/MyButton';
import styled from 'styled-components';

export const HeaderNav = ({userName, changeUserStatus}) => {
    const navigate = useNavigate();

    const favorites = <MyButton name='Sign In'functionClick={() => navigate('/favorites')} />;
    const signIn = <MyButton name='Sign In'functionClick={() => navigate('/login')} />;
    const signUp = <MyButton name='Sign Up'functionClick={() => navigate('/login')} />;
    const exit = <MyButton name='Exit' functionClick={()=>changeUserStatus(null)} />;
    const user = <h3>{`${userName}`.toLocaleUpperCase()}</h3>;

    return (
        <StyledNav>
          {favorites}
          {userName === null ? signIn : <>{user} {exit}</>}
          {signUp}
        </StyledNav>
    )
}

const StyledNav = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;

    button {
        width: 25%;
    }

`