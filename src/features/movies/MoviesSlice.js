import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import MovieApi from "../../common/api/movieApi";
import { apiKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "family";
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
    const resp = await MovieApi.get(`?apiKey=${apiKey}&i=${id}&plot=full`);
    return resp.data;
  }
);
export const fetchAsyncSearchResults = createAsyncThunk(
  "movies/fetchAsyncSearchResults",
  async (data) => {
    const { search, page } = data;
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${search}&page=${page}`
    );
    return resp.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  details: {},
  search: {
    Search:[],
    totalResults:0,
  },
};

const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    removeSelected: (state) => {
      state.details = {};
    },
    clearSearchResult:(state)=>{
      state.search = {Search:[],totalResults:0}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: (err) => {
      console.log("Error!\n", err);
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: (err) => {
      console.log("Error!\n", err);
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      return { ...state, details: payload };
    },
    [fetchAsyncSearchResults.fulfilled]: (state, { payload }) => {
      return { ...state, search: payload };
    },
    [fetchAsyncSearchResults.rejected]: (err)=>{
      console.log("Error!\n",err);
    }
  },
});
export const { removeSelected, clearSearchResult } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.details;
export const getAllSearchResults = (state) => state.movies.search;
export default MovieSlice.reducer;
