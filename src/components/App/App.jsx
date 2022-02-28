import React, { useEffect, useState, useContext } from "react";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import Movies from "./../Movies/Movies";
import Home from "./../Home/Home";
import Tv from "./../Tv/Tv";
import Notfound from "./../Notfound/Notfound";
import AuthForm from "../User/AuthForm";
import { Routes, Route,Navigate} from "react-router-dom";
import { AuthContext } from "./../state/AuthLogin";

export default function App() {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Routes>
          {isLogin ? (
            <React.Fragment>
              <Route path="/Home" element={<Home/>} />
              <Route path="/tv/*" element={<Tv/>} />
              <Route path="/movies/*" element={<Movies/>}/>
              
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path="/Signup" element={<AuthForm />} />
              <Route path="/" element={<Navigate to="/Signup" />} />
            </React.Fragment>
            
          )}
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
      {
        isLogin ? '' : <Footer />
      }
    </React.Fragment>
  );
}
