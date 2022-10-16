import { configureStore } from "@reduxjs/toolkit";
import todos from "./modules/todos";
import comments from "./modules/comments";
import toggle from "./modules/toggle";
const store = configureStore({
  reducer: { todos, comments, toggle },
});

export default store;
