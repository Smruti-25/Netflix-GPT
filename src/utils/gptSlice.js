import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovieResults: null,
    gptMovieresultsData: null
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      const {movieResults, movieResultsData} = action.payload;
      state.gptMovieResults = movieResults;
      state.gptMovieResultsData = movieResultsData;
    },
  },
});


export const { toggleGPTSearchView, addGPTMovieResults } =
  gptSlice.actions;
export default gptSlice.reducer;