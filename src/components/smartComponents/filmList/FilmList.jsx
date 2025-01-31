import React, { useState, useEffect } from "react";
import FilmCard from "../../smartComponents/filmCard/FilmCard";
import styled from "styled-components";
import SearchForm from "../searchForm/SearchForm";
import { useDebounce } from "../customHooks/useDebounce";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { ErrorFallback } from "../errorFallback/ErrorFallback";
import { withErrorBoundary } from "react-error-boundary";
import CustomLoader from "../../stupidComponents/customLoader/CustomLoader";
import Pagination from "../../smartComponents/pagination/Pagination";
import {
  useGetTop250MoviesQuery,
  useSearchMoviesQuery,
} from "../../../store/movieApi";

const FilmList = () => {
  const [movies, setMovies] = useLocalStorage([], "top250Movies");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const moviesPerPage = 10;

  const debouncedQuery = useDebounce(searchQuery, 500);

  // Загружаем топ-250 фильмов, если они не сохранены в localStorage
  const {
    data: top250Movies,
    error: top250Error,
    isLoading: isLoadingTop250,
  } = useGetTop250MoviesQuery(undefined, {
    skip: movies.length > 0, // Если фильмы уже в localStorage, запрос пропускается
  });

  // Поиск фильмов по запросу
  const {
    data: searchResults,
    error: searchError,
    isLoading: isLoadingSearch,
  } = useSearchMoviesQuery(debouncedQuery, {
    skip: !debouncedQuery, // Не выполнять запрос, если поле поиска пустое
  });

  // Сохраняем фильмы из запроса, если они были загружены и не сохранены в localStorage
  useEffect(() => {
    if (top250Movies && Array.isArray(top250Movies) && movies.length === 0) {
      setMovies(top250Movies);
    }
  }, [top250Movies, movies, setMovies]);

  // Определяем, что показывать: результаты поиска или топ-250 фильмов
  const moviesToDisplay =
    debouncedQuery && searchResults?.length ? searchResults : movies;

  // Пагинация
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const numOfPages = Math.max(
    1,
    Math.ceil((moviesToDisplay?.length || 0) / moviesPerPage)
  );
  const displayedMovies =
    moviesToDisplay?.slice(indexOfFirstMovie, indexOfLastMovie) || [];

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

  const handleSearchInput = (searchTerm) => {
    setSearchQuery(searchTerm);
    setCurrentPage(1);
  };

  return (
    <>
      <StyledSearchFormContainer>
        <SearchForm onSearch={handleSearchInput} />
      </StyledSearchFormContainer>

      {top250Error && <p>Error fetching top 250 movies</p>}
      {searchError && <p>Error fetching search results</p>}

      <StyledFilmListContainer>
        {(isLoadingTop250 || isLoadingSearch) && (
          <StyledLoaderOverlay>
            <CustomLoader />
          </StyledLoaderOverlay>
        )}

        <StyledFilmList className='film-list'>
          {displayedMovies.length > 0
            ? displayedMovies.map((movie) => (
                <FilmCard
                  key={movie.id}
                  movieId={movie.id}
                  title={movie.primaryTitle}
                  year={movie.startYear}
                  endYear={movie.endYear}
                  rank={movie.averageRating}
                  image={movie.primaryImage}
                  runtimeMinutes={movie.runtimeMinutes}
                  description={movie.description}
                />
              ))
            : !isLoadingTop250 &&
              !isLoadingSearch && <p>No movies available</p>}
        </StyledFilmList>

        {numOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numOfPages={numOfPages}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        )}
      </StyledFilmListContainer>
    </>
  );
};

const StyledFilmListContainer = styled.div`
height: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledSearchFormContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledFilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
`;

const StyledLoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
`;

export default withErrorBoundary(FilmList, {
  FallbackComponent: ErrorFallback,
});
