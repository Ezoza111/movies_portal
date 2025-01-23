import React, { useEffect } from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmCard from "../../components/stupidComponents/filmCard/FilmCard";
import { useLocalStorage } from "../../components/smartComponents/customHooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { SignUpLink } from "../signUpPage/SignUpLink";

export const FavoritesPage = ({ userName }) => {
  // Используем кастомный хук useLocalStorage для работы с localStorage
  const [favorites, setFavorites] = useLocalStorage([], "favorites");

  // useEffect(() => {
  //   // Загружаем актуальные данные при каждом монтировании страницы
  //   const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   setFavorites(storedFavorites);
  // }, [setFavorites]);

  const updateFavorites = (updatedFavorites) => {
    setFavorites(updatedFavorites); // Обновляем избранное
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Сохраняем в localStorage
  };

  return (
    <MainContainer>
      {userName === null ? (
        <div>
          Для просмотра фильмов перейдите по ссылке <SignUpLink /> для
          регистрации или входа
        </div>
      ) : (
        <StyledFilmListContainer>
          <h1>Favorite movies</h1>
          <StyledFilmList>
            {favorites.length > 0 ? (
              favorites.map((film) => (
                <FilmCard
                  key={uuidv4()} // Создание уникального ключа для каждой карточки
                  movieId={film.movieId}
                  title={film.title} // Используем данные из localStorage
                  year={film.year}
                  rank={film.rank}
                  image={film.image}
                  runtimeMinutes={film.runtimeMinutes}
                  description={film.description}
                  updateFavorites={updateFavorites}
                />
              ))
            ) : (
              <p>You don't have any favorite movies yet</p>
            )}
          </StyledFilmList>
        </StyledFilmListContainer>
      )}
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
  justify-content: center;
`;
