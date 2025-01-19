import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmList from "../../components/smartComponents/filmList/FilmList";

export const Main = () => {
  return (
    <StyledMain className='main'>
      <MainContainer direction={"column"}>
        <FilmList />
      </MainContainer>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  border: 1px solid red;
  padding-top: 30px;
  padding-bottom: 30px;
`;
