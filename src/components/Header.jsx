import logo from '../assets/logo.png';
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
    const siteName = "Kasa";

    return <header>
        <img src={logo} alt={siteName} className='kasa-logo' />
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">À propos</NavLink>
            <Outlet />
        </nav>
    </header>
}