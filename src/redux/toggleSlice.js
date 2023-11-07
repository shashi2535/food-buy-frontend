import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleAction: (state) => {
      console.log("state",state)
      state.toggle = !state.toggle;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleAction } = toggleSlice.actions;

export default toggleSlice.reducer;
