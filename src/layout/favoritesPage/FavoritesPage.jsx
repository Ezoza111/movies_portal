import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";

export const FavoritesPage = () => {
    return (
      <StyledFavorites>
         <MainContainer direction='column' >
            <div>FavoritesPage</div>
            <div>FavoritesPage</div>
         </MainContainer>
      </StyledFavorites>
    )
}

const StyledFavorites = styled.section`
      width: 100%;
      border: 1px solid red;
      padding-top: 30px;
      padding-bottom: 30px;

      div {
        
      }
  `