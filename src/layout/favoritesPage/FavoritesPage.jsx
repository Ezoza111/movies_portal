import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmCard from "../../components/stupidComponents/filmCard/FilmCard";
import { useLocalStorage } from "../../components/smartComponents/customHooks/useLocalStorage";

export const FavoritesPage = () => {
  let [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("favoriteFilmsArray"))
  );

  return (
    <StyledFavorites>
      <MainContainer direction="column" wrap="wrap">
        <div>FavoritesPage</div>
        {localStorage.getItem("favoriteFilmsArray") ? (
          <div>
            {movies.map((movie) => (
              <FilmCard
                key={movie.id}
                title={movie.primaryTitle}
                year={movie.startYear}
                rank={movie.averageRating}
                image={movie.primaryImage}
              />
            ))}
          </div>
        ) : (
          <div>LS пустой</div>
        )}
      </MainContainer>
    </StyledFavorites>
  );
};

const StyledFavorites = styled.section`
  width: 100%;
  border: 1px solid red;
  padding-top: 30px;
  padding-bottom: 30px;

  div {
  }
`;
