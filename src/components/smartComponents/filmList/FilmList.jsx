import React, { useState, useEffect } from "react";
import FilmCard from "../../stupidComponents/filmCard/FilmCard";
import axios from "axios";
import styled from "styled-components";

const FilmList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Состояние для текущей страницы
  const moviesPerPage = 10; // Количество фильмов на одной странице

  const options = {
    method: "GET",
    url: "https://imdb236.p.rapidapi.com/imdb/autocomplete",
    params: { query: "break" },
    headers: {
      "x-rapidapi-key": "60cbaed862mshc93b76ac963e23fp1b69d0jsn822fdd45c3a1",
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.request(options);
        setMovies(response.data);
      } catch (error) {
        setError("Error fetching movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Вычисляем фильмы для текущей страницы
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = Array.isArray(movies)
    ? movies.slice(indexOfFirstMovie, indexOfLastMovie)
    : [];

  // Функции для переключения страниц
  const handleNextPage = () => {
    if (currentPage < Math.ceil(movies.length / moviesPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledFilmListContainer>
      <h1>Top 250 TV Shows</h1>
      <StyledFilmList className='film-list'>
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <FilmCard
              key={movie.id}
              title={movie.primaryTitle}
              year={movie.startYear}
              rank={movie.averageRating}
              image={movie.primaryImage}
            />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledFilmList>

      {/* Пагинация */}
      <StyledPagination>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} from {Math.ceil(movies.length / moviesPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(movies.length / moviesPerPage)}>
          Next
        </button>
      </StyledPagination>
    </StyledFilmListContainer>
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

export default FilmList;
