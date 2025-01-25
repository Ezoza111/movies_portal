import React from 'react';
import { useNavigate } from "react-router-dom";
import { MyButton } from '../../../components/stupidComponents/button/MyButton';

export const SignIn = ({userName, changeUserStatus}) => {
    const navigate = useNavigate();

    const signIn = <MyButton name='Sign In'functionClick={() => navigate('/login')} />;
    const exit = <MyButton name='Exit' functionClick={()=>changeUserStatus(null)} />;
    const user = <h3>{`${userName}`.toLocaleUpperCase()}</h3>;

    return (
        userName === null ? signIn : <>{user} {exit}</>
    )
}
