import Movies from "./components/User/Movies";
import Home from "./components/Home/Home";
import Tv from "./components/Tv/Tv";
import { BrowserRouter, RouterProvider, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/public/Signup";
import Public from "./pages/public/Public";
import LoginU from "./pages/public/LoginU";
import Error from "./pages/Error";
import { useSelector } from "react-redux";
import User from "./pages/user/User";
import PrivateRoutes from "./components/util/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch } from 'react-redux';
import { removeCookies } from "./components/state/store";
import PublicNav from "./components/Navbar/PublicNav";
import Footer from "./components/Footer/Footer";





export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const logout = () => {
    dispatch(removeCookies());
    navigate('/login')
  }


  return (
    <>
      {isAuth ? <Navbar logout={logout} /> : <PublicNav />}
      <Routes>
        {isAuth ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/tv/*" element={<Tv />} />
            <Route path="/movies/*" element={<Movies />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginU />} />
          </>
        )}
        <Route path="*" element={<Error status={404} />} />
      </Routes>
      {
        isAuth ? <Footer /> : ''
      }
    </>

  );

}

