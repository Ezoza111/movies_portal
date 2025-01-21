import React from 'react'
import { Form } from 'react-router-dom'
import { MyButton } from '../../components/stupidComponents/button/MyButton'
import { MainContainer } from '../../components/stupidComponents/container/MainContainer.styled'
import { Button } from '@mui/material'
import { theme } from '../../styles/Theme'
import styled from 'styled-components'

export const SignUpPage = ({changeUserStatus}) => {
    const handleClickSignIn = () => {
            
    }
    const handleClickSignUp= () => {
        
    }

    return ( 
        <MainContainer direction='column' justify='center' align='center' gap='40px'>
  
         <StyledBtn  onClick={handleClickSignUp}>Sign Up</StyledBtn>
         <StyledBtn  onClick={handleClickSignIn}>Sign Up</StyledBtn>
        </MainContainer>
        // <Form>
        //     <input
        // <div><button onClick={()=>changeUserStatus(false)}>userAdd</button></div>
        // <div>/////////////////</div>
        // <div><button onClick={()=>changeUserStatus(true)}>userOut</button></div>
        // </Form>
    )
}
 
const StyledBtn = styled.button`
 width: 50%;
 height: 40px;
 background-color: ${theme.colors.accent[500]};
 color: ${theme.colors.font};
`