import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "http://localhost:3001/todos";

/**TodosList 가져오는 함수 */
export const __getTodos = createAsyncThunk("todos/getTodos", async (payload, thunkApi) => {
  try {
    const { data } = await axios.get(SERVER_URL);
    console.log(data);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

/** 완료된 Todo 분류 작업 */
export const __toggleTodos = createAsyncThunk("todos/toggleTodos", async (payload, thunkApi) => {
  try {
    const { data } = await axios.patch(`${SERVER_URL}/${payload.id}`, payload);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

/** Todo 삭제  */
export const __deleteTodos = createAsyncThunk("todos/deleteTodos", async (payload, thunkApi) => {
  try {
    await axios.delete(`${SERVER_URL}/${payload}`);
    return thunkApi.fulfillWithValue(payload);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export const __editTodos = createAsyncThunk("todos/editTodos", async (payload, thunkApi) => {
  try {
    const { data } = await axios.patch(`${SERVER_URL}/${payload.id}`, payload);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__toggleTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo));
    },
    [__toggleTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__editTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[idx] = action.payload;
    },
    [__editTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todosSlice.reducer;
