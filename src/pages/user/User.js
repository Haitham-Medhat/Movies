import React from 'react'
import Navbar from './../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { removeCookies } from '../../components/state/store';

export default function User() {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    
    const logout = () => {
      dispatch(removeCookies());
      navigate('/login')
    }
  
  return (
    <>
      <Navbar  logout={logout}/>
      <Outlet />
    </>
  )
}
