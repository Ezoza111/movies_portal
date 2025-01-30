import React from "react";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import styled from "styled-components";
import { Register } from "../../components/smartComponents/registration/Registration";
import { Entrance } from "../../components/smartComponents/entrance/Entrance";

const SignUpPage = () => {
  return (
    <StyledEntranceContainer>
      <MainContainer
        direction='column'
        // justify='center'
        align='center'
        gap='40px'
        className='main'>
        <Register />
        <Entrance />
      </MainContainer>
    </StyledEntranceContainer>
  );
};

const StyledEntranceContainer = styled.div`
  height: calc(100dvh - 78px);
  display: flex;
  justify-content: center;
  padding-top: 115px;
`;

export default SignUpPage;