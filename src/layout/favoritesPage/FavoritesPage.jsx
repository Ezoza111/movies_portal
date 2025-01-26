import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmCard from "../../components/stupidComponents/filmCard/FilmCard";
import { useLocalStorage } from "../../components/smartComponents/customHooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { SignUpLink } from "../signUpPage/SignUpLink";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { theme } from "../../styles/Theme";
import { Link } from "react-router-dom";

export const FavoritesPage = ({ userName }) => {
  const localStorageKey = `favorites_${userName}`;
  const [favorites, setFavorites] = useLocalStorage([], "favorites");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("dateAdded"); // Ключ для сортировки по умолчанию - дата добавления
  const [isAscending, setIsAscending] = useState(false); // По умолчанию - по убыванию (новые фильмы впереди)
  const moviesPerPage = 10;

  useEffect(() => {
    if (userName) {
      const storedFavorites =
        JSON.parse(localStorage.getItem(localStorageKey)) || [];
      setFavorites(storedFavorites);
    }
  }, [setFavorites, userName, localStorageKey]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const numOfPages = Math.ceil(favorites.length / moviesPerPage);

  // Функция сортировки
  const sortMovies = (movies, key, ascending) => {
    if (key === "dateAdded") {
      return ascending ? [...movies] : [...movies].reverse();
    }
    return [...movies].sort((a, b) => {
      if (key === "title") {
        return ascending
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (key === "year") {
        return ascending ? a.year - b.year : b.year - a.year;
      } else if (key === "rank") {
        return ascending ? a.rank - b.rank : b.rank - a.rank;
      } else if (key === "runtimeMinutes") {
        return ascending
          ? a.runtimeMinutes - b.runtimeMinutes
          : b.runtimeMinutes - a.runtimeMinutes;
      }
      return 0;
    });
  };

  // Применение сортировки
  const sortedFavorites = sortMovies(favorites, sortKey, isAscending);
  const displayedMovies = sortedFavorites.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const handleNextPage = () => {
    if (currentPage < numOfPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSortChange = (event) => {
    setSortKey(event.target.value);
  };

  const handleSortDirectionToggle = () => {
    setIsAscending((prevState) => !prevState); // Меняем направление сортировки
  };

  // const updateFavorites = (updatedFavorites) => {
  //   setFavorites(updatedFavorites); // Обновляем избранное
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Сохраняем в localStorage
  // };

  return (
    <MainContainer>
      <StyledFavoritesPage>
        {userName === null ? (
          <p>
            {/* Для просмотра фильмов перейдите по ссылке <SignUpLink /> для
            регистрации или входа */}
            To add movies to your favorites list, follow the{" "}
            <Link to='/login'>link</Link> to register or log in.
          </p>
        ) : (
          <StyledFilmListContainer>
            <h1>Favorite movies ({favorites.length})</h1>
            <StyledControls>
              <label htmlFor='sortKey'>Sort by: </label>
              <select id='sortKey' value={sortKey} onChange={handleSortChange}>
                <option value='dateAdded'>Date Added</option>
                <option value='title'>Title</option>
                <option value='year'>Year</option>
                <option value='rank'>Rank</option>
                <option value='runtimeMinutes'>Runtime</option>
              </select>
              <StyledSwapVertIcon onClick={handleSortDirectionToggle} />
            </StyledControls>
            <StyledFilmList>
              {displayedMovies.length > 0 ? (
                displayedMovies.map((film) => (
                  <FilmCard
                    key={uuidv4()} // Создание уникального ключа для каждой карточки
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
            <StyledPagination>
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </button>
              <span>
                Page {currentPage} from {numOfPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === numOfPages}>
                Next
              </button>
            </StyledPagination>
          </StyledFilmListContainer>
        )}
      </StyledFavoritesPage>
    </MainContainer>
  );
};

const StyledFavoritesPage = styled.div`
  width: 100%;
`;

const StyledFilmListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: flex-start;
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  span {
    padding: 5px;
  }
`;

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 5px;
`;

const StyledSwapVertIcon = styled(SwapVertIcon)`
  cursor: pointer;
  margin-left: 10px;
  background-color: ${theme.colors.accent[500]};
`;
