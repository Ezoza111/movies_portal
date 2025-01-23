import styled from "styled-components";

export const MainContainer = styled.div `
  margin: 0 auto;
  border: 1px solid red;
  padding: 20px;
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  width: 100%;
  height: 100%;
`;
