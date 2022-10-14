import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default commentsSlice.reducer;
