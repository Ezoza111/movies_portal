import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmList from "../../components/smartComponents/filmList/FilmList";

const Main = () => {
  return (
    <StyledMain className='film-container'>
      <MainContainer direction={"column"}>
        <FilmList />
      </MainContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 100%;
`;

export default Main;