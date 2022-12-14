import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default MainRoutes