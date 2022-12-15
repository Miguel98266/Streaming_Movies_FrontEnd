import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SharedLayout } from "../pages/SharedLayout";
import { DetailMovie } from "../pages/DetailMovie";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { NotFound } from "../pages/NotFound";
import { CreateMovie } from "../pages/CreateMovie";
const MainRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route index element={<Login />} />
      
      <Route path="movies" element={<SharedLayout />}>
        <Route
          index
          element={isAuth ? <Home /> : <Navigate to="/" replace />}
        />
        <Route path=":movieId" element={<DetailMovie />} />
        <Route path="createMovie" element={<CreateMovie/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
