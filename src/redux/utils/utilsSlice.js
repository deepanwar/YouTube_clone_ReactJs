import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setIsSideBarOpen: (state, action) => {
      console.log(action);
      if (action.payload === undefined) {
        state.isSideBarOpen = !state.isSideBarOpen;
      } else {
        state.isSideBarOpen = action.payload;
      }
    },
  },
});

export const { setIsSideBarOpen } = utilsSlice.actions;
export default utilsSlice.reducer;
