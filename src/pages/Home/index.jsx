import React from "react";
import "../../index.css";
import logementsData from "../../logements.json";

export default function Home() {
	const logements = logementsData.map((logement) => console.log(logement));
	console.log(logements);
	return (
		<main className="corps-page">
			<section className="titre__page home">
				<h1>Chez vous, partout et ailleurs</h1>
			</section>
			<section>
				<ul>
					<li>Logement 1</li>
					<li>Logement 2</li>
					<li>Logement 3</li>
				</ul>
			</section>
		</main>
	);
}
