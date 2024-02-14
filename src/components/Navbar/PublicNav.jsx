  
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo-dark.webp"; 
import SocialLogs from './SocialLogs';

export default function PublicNav() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ height: "15vh", backgroundColor: "#131722" }}>
            <div style={{ height: 'inherit' }} className="d-flex justify-content-between container align-items-center">
                <button className="navbar-toggler bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-info"></span>
                </button>
                <div style={{ height: 'inherit' }} className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="px-2">
                            <img src={logo} alt="logo" />
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                       <SocialLogs/>
                        <li className="px-2">
                            <NavLink to="/signup">Signup</NavLink>
                        </li>
                        <li className="px-2">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
