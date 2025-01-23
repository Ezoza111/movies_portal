import React, { useState, useEffect } from "react";
import FilmCard from "../../stupidComponents/filmCard/FilmCard";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "../searchForm/SearchForm";
import { useDebounce } from "../customHooks/useDebounce";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { ErrorFallback } from "../errorFallback/ErrorFallback";
import { withErrorBoundary } from "react-error-boundary";

const FilmList = ({userName}) => {
  const [movies, setMovies] = useLocalStorage([], "top250Movies");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const moviesArrayForExperement = [...movies];
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
      "x-rapidapi-key": ezozaApiKey,
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
    url: "https://imdb236.p.rapidapi.com/imdb/search",
    params: {
      primaryTitle: searchQuery,
      query: debouncedQuery,
      type: "movie",
      // genre: "Drama",
      rows: "25",
      sortField: "id",
      sortOrder: "ASC",
    },
    headers: {
      "x-rapidapi-key": ezozaApiKey,
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };

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
          setMovies(response.data); // Только для поиска обновляем состояние, без записи в localStorage
        } catch (error) {
          setError("Error fetching search results");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
  }, [debouncedQuery]); // Поиск выполняется, когда меняется debouncedQuery

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const numOfPages = Math.ceil(movies.length / moviesPerPage);
  const currentMovies = Array.isArray(movies)
    ? movies.slice(indexOfFirstMovie, indexOfLastMovie)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <StyledSearchFormContainer>
        <SearchForm onSearch={handleSearchInput} />
      </StyledSearchFormContainer>

      <StyledFilmListContainer>
        <StyledFilmList className='film-list'>
          {currentMovies.length > 0 ? (
            moviesArrayForExperement.map((movie) => (
              <FilmCard
                key={movie.id}
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

export default withErrorBoundary (FilmList, {FallbackComponent: (ErrorFallback)});
