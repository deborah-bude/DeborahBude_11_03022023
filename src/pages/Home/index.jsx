import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import logementsData from "../../logements.json";

export default function Home() {
	const logements = logementsData.map((logement) => {
		const id = "/logements/" + logement.id;
		return (
			<Link key={logement.id} to={id} className="logements-items">
				<li>
					<p className="logements-items__title">{logement.title}</p>
					<img className="logements-items__img" src={logement.cover} alt={logement.title} />
				</li>
			</Link>
		);
	});

	return (
		<main className="corps-page">
			<section className="titre__page home">
				<h1>Chez vous, partout et ailleurs</h1>
			</section>
			<section>
				<ul className="logements">{logements}</ul>
			</section>
		</main>
	);
}
