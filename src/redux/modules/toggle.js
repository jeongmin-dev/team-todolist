import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleAni: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});
export const { toggleAni } = toggleSlice.actions;
export default toggleSlice.reducer;
