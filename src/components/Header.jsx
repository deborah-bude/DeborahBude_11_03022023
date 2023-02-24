import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
	const siteName = "Kasa";

	return (
		<header className="entete-page">
			<Link className="kasa-logo" to="/">
				<img src={logo} alt={siteName} />
			</Link>
			<nav className="entete-page__nav">
				<NavLink className="entete-page__nav_items" to="/">
					Accueil
				</NavLink>
				<NavLink className="entete-page__nav_items" to="/apropos">
					À propos
				</NavLink>
			</nav>
		</header>
	);
}
