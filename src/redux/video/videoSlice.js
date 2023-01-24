import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoList: [],
  watchLater: [],
  selectedCategory: "Home",
  error: "",
  loading: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addToWatchLater: (state, action) => {
      state.watchLater.push(action.payload);
    },
  },
});

export const { changeCategory, addToWatchLater } = videoSlice.actions;
export default videoSlice.reducer;
