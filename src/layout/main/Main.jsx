import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmList from "../../components/smartComponents/filmList/FilmList";

const Main = ({ userName }) => {
  return (
    <StyledMain className='film-container'>
      <MainContainer direction={"column"}>
        <FilmList userName={userName} />
      </MainContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  // max-width: 1280px;
  display: flex;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  // height: 80vh;
`;

export default Main;