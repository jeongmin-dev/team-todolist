import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
});

export default todosSlice.reducer;
