import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element }) {
  const isAuth = useSelector((state) => state.isAuth);
  return isAuth ? element : <Navigate to="/login" />;
}