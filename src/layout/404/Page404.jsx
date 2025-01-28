import styled from "styled-components";

const Page404 = () => {
  return (
    <StyledPage404>
      <StyledContentContainer>
        <h1>404</h1>
        <p>Page not found :(</p>
      </StyledContentContainer>
    </StyledPage404>
  );
};

export default Page404;

const StyledPage404 = styled.div`
 display: grid;
 justify-content: center;
 height: calc(100dvh - 78px);
`

const StyledContentContainer = styled.div`
  margin-top: 115px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h1 {
  font-size: 5rem;
  }
`