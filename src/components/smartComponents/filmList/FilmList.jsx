import React, { useState, useEffect } from "react";
import FilmCard from "../../stupidComponents/filmCard/FilmCard";
import axios from "axios";

const FilmList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Top 250 TV Shows</h1>
      <div className='film-list'>
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <FilmCard
              key={movie.id}
              title={movie.primaryTitle}
              year={movie.startYear}
              rank={movie.averageRating}
              image={movie.primaryImage} // URL изображения
            />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default FilmList;
