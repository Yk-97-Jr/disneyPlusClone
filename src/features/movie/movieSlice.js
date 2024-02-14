import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  new: [],
  original: [],
  trending: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCategoriesAndDocuments: (state, action) => {
      state.recommend = action.payload.recommend;
      state.new = action.payload.new;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setCategoriesAndDocuments } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNew = (state) => state.movie.new;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
