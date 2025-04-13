import { createSlice } from "@reduxjs/toolkit";
const navslice = createSlice({
  name: "mobileNav",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = navslice.actions;
export default navslice.reducer;
