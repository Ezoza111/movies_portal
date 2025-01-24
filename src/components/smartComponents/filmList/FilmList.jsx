import React, { useState, useEffect } from "react";
import FilmCard from "../../stupidComponents/filmCard/FilmCard";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "../searchForm/SearchForm";
import { useDebounce } from "../customHooks/useDebounce";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { ErrorFallback } from "../errorFallback/ErrorFallback";
import { withErrorBoundary } from "react-error-boundary";
import CustomLoader from "../../stupidComponents/customLoader/CustomLoader";
import { v4 as uuidv4 } from "uuid";

const FilmList = ({ userName }) => {
  const [movies, setMovies] = useLocalStorage([], "top250Movies");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const moviesArrayForExperement = [...movies];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const moviesPerPage = 10;

  const debouncedQuery = useDebounce(searchQuery, 500);

  const svetaApiKey = "60cbaed862mshc93b76ac963e23fp1b69d0jsn822fdd45c3a1";
  const ezozaApiKey = "462584b673mshc931f4a3e9c8cdbp11fe33jsn59ea027bfb32";

  const getTop250Options = {
    method: "GET",
    url: "https://imdb236.p.rapidapi.com/imdb/top250-movies",
    headers: {
      "x-rapidapi-key": svetaApiKey,
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };

  // const getSearchOptions = {
  //   method: "GET",
  //   url: "https://imdb236.p.rapidapi.com/imdb/search",
  //   params: { query: debouncedQuery },
  //   headers: {
  //     "x-rapidapi-key": svetaApiKey,
  //     "x-rapidapi-host": "imdb236.p.rapidapi.com",
  //   },
  // };
  const getSearchOptions = {
    method: "GET",
    url: "https://imdb236.p.rapidapi.com/imdb/autocomplete",
    params: {
      query: debouncedQuery,
    },
    headers: {
      "x-rapidapi-key": svetaApiKey,
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };
  // const getSearchOptions = {
  //   method: "GET",
  //   url: "https://imdb236.p.rapidapi.com/imdb/search",
  //   params: {
  //     primaryTitle: searchQuery,
  //     query: debouncedQuery,
  //     type: "movie",
  //     // genre: "Drama",
  //     // startYear: '2022',
  //     rows: "25",
  //     sortField: "id",
  //     sortOrder: "ASC",
  //   },
  //   headers: {
  //     "x-rapidapi-key": svetaApiKey,
  //     "x-rapidapi-host": "imdb236.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      // Проверяем, есть ли фильмы в localStorage, если есть, сразу их используем
      if (movies.length === 0) {
        try {
          const response = await axios.request(getTop250Options);
          const fetchedMovies = response.data;
          // Сохраняем фильмы в localStorage через хук
          setMovies(fetchedMovies);
        } catch (error) {
          setError("Error fetching movies");
        } finally {
          setLoading(false);
        }
      } else {
        // Если фильмы уже есть в состоянии, прекращаем загрузку
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movies, setMovies]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (debouncedQuery) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.request(getSearchOptions);
          const results = response.data;
          if (results.length > 0) {
            setSearchResults(results); // Обновляем временное состояние для поиска
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          setError("Error fetching search results");
        } finally {
          setLoading(false);
        }
      } else {
        setSearchResults([]); // Если поиск отменен (пустой запрос), очищаем результаты
      }
    };

    fetchSearchResults();
  }, [debouncedQuery]); // Поиск выполняется, когда меняется debouncedQuery

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const numOfPages = Math.ceil(movies.length / moviesPerPage);
  const currentMovies =
    Array.isArray(searchResults) && searchResults.length > 0
      ? searchResults
      : movies;

  const displayedMovies = Array.isArray(currentMovies)
    ? currentMovies.slice(indexOfFirstMovie, indexOfLastMovie)
    : [];

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

      {error && <p>{error}</p>}

      <StyledFilmListContainer>
        {loading && (
          <StyledLoaderOverlay>
            <CustomLoader />
          </StyledLoaderOverlay>
        )}

        <StyledFilmList className='film-list'>
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => (
              <FilmCard
                key={uuidv4()}
                movieId={movie.id}
                title={movie.primaryTitle}
                year={movie.startYear}
                rank={movie.averageRating}
                image={movie.primaryImage}
                runtimeMinutes={movie.runtimeMinutes}
                description={movie.description}
                userName={userName}
              />
            ))
          ) : (
            <p>No movies available</p>
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
    </>
  );
};

const StyledFilmListContainer = styled.div`
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
  justify-content: center;
  gap: 20px;
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

const StyledLoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

export default withErrorBoundary(FilmList, {
  FallbackComponent: ErrorFallback,
});
