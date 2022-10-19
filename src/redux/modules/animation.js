import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxAni: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
};

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    toggleAni: (state, action) => {
      state.boxAni = action.payload;
    },
  },
});
export const { toggleAni, toggleLayout } = animationSlice.actions;
export default animationSlice.reducer;
