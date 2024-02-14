 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/public/Signup";
import Public from "./pages/public/Public";
import LoginU from "./pages/public/LoginU";
import Error from "./pages/Error";
import User from "./pages/user/User";
import ProtectedRoute from "./components/util/ProtectedRoute";
import PublicRoute from "./components/util/PublicRouter";
import MoviesPage from "./pages/user/MoviesPage";
import { useSelector } from "react-redux";
import Tvpage from "./pages/user/Tvpage";
import HomePage from "./pages/user/HomePage";




export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute element={<User />} />, errorElement: <Error />,
      children: [
        { index: true, element: <ProtectedRoute element={<HomePage />} /> },
        { path: 'home', element: <ProtectedRoute element={<HomePage />} /> },
        { path: 'movies/*', element: <ProtectedRoute element={<MoviesPage />} /> },
        { path: 'tv/*', element: <ProtectedRoute element={<Tvpage />} /> }
      ]
    },

    {
      path: '/',
      element: <PublicRoute element={<Public />} />, errorElement: <Error />,
      children: [
        { index: true, element: <PublicRoute element={<Signup />} /> },
        { path: 'signup', element: <PublicRoute element={<Signup />} /> },
        { path: 'login', element: <PublicRoute element={<LoginU />} /> }
      ]
    }

  ]);


  return (
    <RouterProvider router={router} />
  );

}

