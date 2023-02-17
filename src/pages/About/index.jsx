import React from "react";
import "../../index.css";
import Collapse from "../../components/Collapse";

export default function About() {
	const fiability_content =
		"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
	const recpect_content =
		"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
	const service_content =
		"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
	const responsibility_content =
		"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
	return (
		<main className="corps-page">
			<section className="titre__page about"></section>
			<div>
				<ul>
					<Collapse titre="Fiabilité" content={fiability_content} />
					<Collapse titre="Respect" content={recpect_content} />
					<Collapse titre="Service" content={service_content} />
					<Collapse titre="Responsabilité" content={responsibility_content} />
				</ul>
			</div>
		</main>
	);
}
