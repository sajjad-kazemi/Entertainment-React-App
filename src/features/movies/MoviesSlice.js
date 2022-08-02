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
    console.log(resp.data);
    return resp.data;
  }
);
export const fetchAsyncNextPage = createAsyncThunk(
  "movies/fetchAsyncNextPage",
  async (data) => {
    const { search, page } = data;
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${search}&page=${page + 1}`
    );
    return resp.data;
  }
);
export const fetchAsyncPrevPage = createAsyncThunk(
  "movies/fetchAsyncPrevPage",
  async (data) => {
    const { search, page } = data;
    const resp = await MovieApi.get(
      `?apiKey=${apiKey}&s=${search}&page=${page - 1}`
    );
    return resp.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  details: {},
  search: {},
  nextPage: false,
  prevPage: false,
};

const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    removeSelected: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("state", state);
      console.log("payload", payload);
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
    [fetchAsyncNextPage.fulfilled]: (state, { payload }) => {
      return { ...state, nextPage: payload.Response };
    },
    [fetchAsyncPrevPage.fulfilled]: (state, { payload }) => {
      return { ...state, prevPage: payload.Response };
    },
  },
});
export const { removeSelected } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.details;
export const getAllSearchResults = (state) => state.movies.search;
export const NextPage = (state) => state.movies.nextPage;
export const PrevPage = (state) => state.movies.prevPage;
export default MovieSlice.reducer;
