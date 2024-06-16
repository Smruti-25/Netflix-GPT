import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovieResults: [],
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      state.gptMovieResults = action.payload
    },
  }
});


export const { toggleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;