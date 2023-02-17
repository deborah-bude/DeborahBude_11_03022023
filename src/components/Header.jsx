import logo from "../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
	const siteName = "Kasa";

	return (
		<header className="entete-page">
			<img src={logo} alt={siteName} className="kasa-logo" />
			<nav className="entete-page__nav">
				<NavLink className="entete-page__nav_items" to="/">
					Accueil
				</NavLink>
				<NavLink className="entete-page__nav_items" to="/apropos">
					À propos
				</NavLink>
				<Outlet />
			</nav>
		</header>
	);
}
