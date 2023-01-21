import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoList: [],
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
  },
});


export const { changeCategory } = videoSlice.actions;
export default videoSlice.reducer;
