import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import toggleReducer from "./toggleSlice"

export const store = configureStore({
    reducer: {
      users: userReducer,
      toggle: toggleReducer,
    },
  });