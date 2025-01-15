import styled from 'styled-components'
import { Logo } from '../../components/stupidComponents/logo/Logo'
import { MainContainer } from '../../components/stupidComponents/container/MainContainer.styled'


export const Header = () => {
  return (
    <StyledHeader className='header'>
      <MainContainer direction={'row'} justify={'space-between'}>
        <Logo iconId={'logo'}/>
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