import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmCard from "../../components/stupidComponents/filmCard/FilmCard";
import { useLocalStorage } from "../../components/smartComponents/customHooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export const FavoritesPage = () => {
  // Используем кастомный хук useLocalStorage для работы с localStorage
  const [favorites, setFavorites] = useLocalStorage([], "favorites");

  return (
    <MainContainer>
      <StyledFilmListContainer>
        <h1>Favorite movies</h1>
        <StyledFilmList>
          {favorites.length > 0 ? (
            favorites.map((film) => (
              <FilmCard key={uuidv4()} // Создание уникального ключа для каждой карточки
                movieId={film.movieId}
                title={film.title} // Используем данные из localStorage
                year={film.year}
                rank={film.rank}
                image={film.image}
                runtimeMinutes={film.runtimeMinutes}
                description={film.description}
              />
            ))
          ) : (
            <p>You don't have any favorite movies yet</p>
          )}
        </StyledFilmList>
      </StyledFilmListContainer>
    </MainContainer>
  );
};

const StyledFilmListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;
