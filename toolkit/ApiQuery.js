import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseUrl, other } from "../constants/url";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => ({
        url : `movie/popular?api_key=${apiKey}${other}`,
        method : "GET"
      }),
    }),
    getNowPlaying: builder.query({
      query: () => ({
        url : `movie/now_playing?api_key=${apiKey}${other}`,
        method : "GET"
      }),
    }),
    getGenres : builder.query({
      query : () => ({
        url : `genre/movie/list?api_key=${apiKey}${other}`,
        method : 'GET'
      })
    }),
    getUpcoming: builder.query({
      query : () => ({
        url : `movie/upcoming?api_key=${apiKey}${other}`,
        method  : "GET"
      })
    }),
    getTopRated: builder.query({
      query : () => ({
        url : `movie/top_rated?api_key=${apiKey}${other}`,
        method  : "GET"
      })
    }),
    getSeries : builder.query({
      query : () => ({
        url  : `trending/tv/day?api_key=${apiKey}${other}`,
        method : "GET"
      })
    }),
    getAllMovie : builder.query({
      query : (path) => ({
        url  : `${path}?api_key=${apiKey}${other}`,
        method : "GET"
      })
    }),
    getMoviesByGenres : builder.query({
      query : (genresId) => ({
        url  : `discover/movie?&with_genres=${genresId}&api_key=${apiKey}${other}`,
        method : "GET"
      })
    }),
    getMovieDetails : builder.query({
      query : (movieId)=>({
        url : `movie/${movieId}?api_key=${apiKey}${other}`,
        method  : "GET"
      })
    }),
    getMovieTriler : builder.query({
      query : (movieId)=>({
        url : `movie/${movieId}/videos?api_key=${apiKey}${other}`,
        method : 'GET'
      })
    }),
    getSeriesTriler : builder.query({
      query : (Id)=>({
        url : `tv/${Id}/videos?api_key=${apiKey}${other}`,
        method : 'GET'
      })
    }),
    getCredits : builder.query({
      query : (id)=>({
        url : `movie/${id}/credits?api_key=${apiKey}${other}`,
        method : "GET"
      })
    }),
    getRecos : builder.query({
      query : (id)=>({
        url : `movie/${id}/similar?api_key=${apiKey}${other}`,
        method : "GET"
      })
    }),
    getSearch : builder.query({
      query : (text)=>({
        url : `search/movie?query=${text}&include_adult=false&api_key=${apiKey}${other}`,
        method : "GET"
      })
    })
  }),
});

export const {
  useGetPopularQuery,
  useGetAllMovieQuery,
  useGetGenresQuery,
  useGetUpcomingQuery,
  useGetSeriesQuery,
  useGetMoviesByGenresQuery,
  useGetMovieDetailsQuery,
  useGetMovieTrilerQuery,
  useGetCreditsQuery,
  useGetRecosQuery,
  useGetSeriesTrilerQuery,
  useGetTopRatedQuery,
  useGetSearchQuery,
  useGetNowPlayingQuery,
} = movieApi;