import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export default function PublicRoute({ element }) {
  const isAuth = useSelector((state) => state.isAuth);
  return isAuth ? <Navigate to="/" /> : element;
}
