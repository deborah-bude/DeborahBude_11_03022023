import { Link, Outlet } from "react-router-dom";

export default function Error404() {
	return (
		<main className="corps-page error">
			<h1 className="title--error">404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link className="link" to="/">
				Retourner sur la page d’accueil
			</Link>
			<Outlet />
		</main>
	);
}
