import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import Form from "../pages/Form";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route를 추가해주세요! */}
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/write" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
