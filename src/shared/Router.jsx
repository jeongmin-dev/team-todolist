import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import Comments from "../pages/Comments";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route를 추가해주세요! */}
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/todoList/:id" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
