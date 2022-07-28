import MoviesSlice from "./movies/MoviesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const  store = configureStore({
  reducer:{
    movies:MoviesSlice,
  },
});
