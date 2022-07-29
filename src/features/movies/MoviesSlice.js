import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import MovieApi from "../../common/api/movieApi";
import { apiKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "man";
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${movieText}&type=movie`
    );
    return resp.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${seriesText}&type=series`
    );
    return resp.data;
  }
);

const initialState = {
  movies: {},
  shows:{},
};

const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
      return {...state, movies:payload}
    },
    [fetchAsyncMovies.pending]: () => {
      console.log('Loading ...');
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Error!');
    },
    [fetchAsyncShows.fulfilled]:(state,{payload})=>{
      return {...state,shows:payload}
    }
    },
});
export const { addMovies } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default MovieSlice.reducer;
