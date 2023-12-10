
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default CustomRoutes;
