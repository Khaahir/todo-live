import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./TodoAppSlice";

const store = configureStore({
  reducer: {
    toggle: navReducer,
  },
});

export default store;
