import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://imdb236.p.rapidapi.com/imdb/", // Общий базовый URL
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "462584b673mshc931f4a3e9c8cdbp11fe33jsn59ea027bfb32"
      );
      headers.set("x-rapidapi-host", "imdb236.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTop250Movies: builder.query({
      query: () => "top250-movies", // Эндпоинт для получения топ-250 фильмов
    }),
    searchMovies: builder.query({
      query: (query) => ({
        url: "autocomplete",
        params: { query },
      }), // Эндпоинт для поиска фильмов
    }),
  }),
});

export const { useGetTop250MoviesQuery, useSearchMoviesQuery } = movieApi;
