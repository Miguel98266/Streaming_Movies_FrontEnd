import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { DetailMovie } from "../pages/DetailMovie";
const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/detail-movie" element={<DetailMovie />}></Route>
    </Routes>
  );
};

export default MainRoutes