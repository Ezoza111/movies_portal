import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmCard from "../../components/smartComponents/filmCard/FilmCard";
import { useLocalStorage } from "../../components/smartComponents/customHooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { theme } from "../../styles/Theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "../../components/smartComponents/pagination/Pagination";
import { useContext } from "react";
import { ThemeContext } from "../../components/smartComponents/context/ThemeContext";

const FavoritesPage = () => {
  const { userName } = useSelector((state) => state.userName.userName);
  const { isDark } = useContext(ThemeContext);

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
  const numOfPages = Math.max(1, Math.ceil(favorites.length / moviesPerPage));

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

  return (
    <MainContainer style={{ minHeight: "calc(100vh - 80px)" }}>
      <StyledFavoritesPage>
        {!userName ? (
          <StyledWarning>
            <p>
              {/* Для просмотра фильмов перейдите по ссылке <SignUpLink /> для
              регистрации или входа */}
              To add movies to your favorites list, follow the{" "}
              <Link to='/login'>link</Link> to register or log in.
            </p>
          </StyledWarning>
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
              <StyledSwapVertIcon
                onClick={handleSortDirectionToggle}
                className={`${isDark ? "dark" : "light"}`}
              />
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
            <Pagination
              currentPage={currentPage}
              numOfPages={numOfPages}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
            />
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
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
  text-align: center;
  }
`;

const StyledFilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
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

  &.dark {
    background-color: ${theme.colors.accent};
    color: #000000;
  }
  &.light {
    background-color: ${theme.colors.accentLight};
  }
`;

const StyledWarning = styled.div`
width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 115px;
  font-size: 1.5rem;
  text-align: center;
  text-wrap: balance;
  p {
    max-width: 600px;
  }
`;

export default FavoritesPage;
