import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeUserStatus } from "../../../store/usernameSlice";
import { MyButton } from "../../../components/stupidComponents/button/MyButton";
import styled from "styled-components";

export const HeaderNav = () => {
  const navigate = useNavigate();
  const { userName } = useSelector((state) => state.userName.userName);
  const dispatch = useDispatch();

  const favorites = (
    <MyButton name='Favorites' functionClick={() => navigate("/favorites")}/>
  );
  // const signIn = <MyButton name='Sign In'functionClick={() => navigate('/login')} />;
  const signUp = (
    <MyButton name='Sign Up' functionClick={() => navigate("/login")} />
  );
  const exit = (
    <MyButton
      name='Exit'
      functionClick={() => dispatch(changeUserStatus(null))}
    />
  );
  const user = <h3>{`${userName}`}</h3>;

  return (
    <StyledNav>
      {favorites}
      {/* {userName === null ? signIn : <>{user} {exit}</>} */}
      {userName !== null && (
        <>
          {user} {exit}
        </>
      )}
      {userName === null && <>{signUp}</>}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
