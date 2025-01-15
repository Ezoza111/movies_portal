import styled from 'styled-components'
import { MainContainer } from '../../components/stupidComponents/container/MainContainer.styled'
import { Logo } from '../../components/stupidComponents/logo/Logo'

export const Main = () => {
    return (
      <StyledMain className='main'>
          <MainContainer direction={'column'} gap={'40px'} justify={'center'}>
          </MainContainer>
      </StyledMain>
    )
  }
  
  const StyledMain = styled.main`
      width: 100%;
      border: 1px solid red;
      padding-top: 30px;
      padding-bottom: 30px;
  `