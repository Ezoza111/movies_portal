import React from "react";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import styled from "styled-components";
import { Register } from "../../components/smartComponents/registration/Registration";
import { Entrance } from "../../components/smartComponents/entrance/Entrance";
// import { theme } from "../../styles/Theme";

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

// const StyledBtn = styled.button`
//   width: 50%;
//   height: 40px;
//   background-color: ${theme.colors.accent[500]};
//   color: ${theme.colors.font};
// `;
export default SignUpPage;