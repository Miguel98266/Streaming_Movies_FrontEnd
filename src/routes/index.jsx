import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SharedLayout } from "../pages/SharedLayout";
import { DetailMovie } from "../pages/DetailMovie";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="movies" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path=":movieId" element={<DetailMovie />} />
      </Route>
      <Route index element={<Login />}></Route>
    </Routes>
  );
};

export default MainRoutes;
