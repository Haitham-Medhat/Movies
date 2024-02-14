import Movies from "./components/User/Movies";
import Home from "./components/User/Home";
import Tv from "./components/User/Tv";
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
import { useLayoutEffect } from "react";


export default function App() {
    const isAuth = useSelector((state) => state.isAuth);



    const router = createBrowserRouter([
        {
            path: '/',
            element: <ProtectedRoute element={<User />} />, errorElement: <Error />,
            children: [
                { index: true, element: <ProtectedRoute element={<Home />} /> },
                { path: 'home', element: <ProtectedRoute element={<Home />} /> },
                { path: 'movies/*', element: <ProtectedRoute element={<MoviesPage />} /> },
                { path: 'tv/*', element: <ProtectedRoute element={<Tv />} /> }
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
        <>
            <RouterProvider router={router} />
        </>

    );

}

