import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmList from "../../components/smartComponents/filmList/FilmList";

export const Main = ({userName}) => {
  return (
    <StyledMain className='main'>
      <MainContainer direction={"column"}>
        <FilmList userName={userName}/>
      </MainContainer>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  border: 1px solid red;
  padding-top: 30px;
  padding-bottom: 30px;
  // height: 80vh;
`;
