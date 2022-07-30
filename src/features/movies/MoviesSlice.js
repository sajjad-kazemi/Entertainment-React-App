import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import MovieApi from "../../common/api/movieApi";
import { apiKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "love";
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${movieText}&type=movie`
    );
    return resp.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friend";
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${seriesText}&type=series`
    );
    return resp.data;
  }
);
export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&i=${id}&plot=full`
    );
    return resp.data;
  }
);

const initialState = {
  movies: {},
  shows:{},
  details:{}
};

const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    removeSelected: (state) => {
      state.details = {}
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
      return {...state, movies:payload}
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Error!');
    },
    [fetchAsyncShows.fulfilled]:(state,{payload})=>{
      return {...state,shows:payload}
    },
    [fetchAsyncShows.rejected]: () => {
      console.log('Error!');
    },
    [fetchAsyncDetails.fulfilled]: (state,{payload}) => {
      return {...state ,details: payload}
    }
    },
});
export const { removeSelected } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.details;
export default MovieSlice.reducer;
