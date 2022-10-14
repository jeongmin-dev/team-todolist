import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route를 추가해주세요! */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
