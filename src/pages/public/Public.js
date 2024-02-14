import React from 'react' 
import { Outlet } from 'react-router-dom'
import Footer from '../../components/public/Footer'
import PublicNav from '../../components/Navbar/PublicNav'

export default function Public() {
  return (
    <div>
        <PublicNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
