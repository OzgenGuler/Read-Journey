// src/routes/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children, restricted = false }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  // Eğer restricted true ise ve kullanıcı giriş yapmışsa, recommended sayfasına yönlendir
  return isLoggedIn && restricted ? <Navigate to="/recommended" /> : children;
};

export default PublicRoute;
