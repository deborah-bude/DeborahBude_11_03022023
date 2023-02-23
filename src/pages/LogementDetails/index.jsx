import { React } from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../logements.json";
import Collapse from "../../components/Collapse";

export default function LogementDetails() {
	const params = useParams();
	const logement = redirectionLogements(params.id);

	const template = templateLogement(logement);

	return <main className="corps-page">{template}</main>;
}

function redirectionLogements(idLogement) {
	const test = logementsData.find((p) => p.id === idLogement);
	if (test !== undefined || test != null) {
		return test;
	} else {
		console.log("retour page 404");
	}
}

function templateLogement(logement) {
	let tags_liste = [];
	for (let i = 0; i < logement.tags.length; i++) {
		const idKey = "t" + i;
		const tag = <li key={idKey}>{logement.tags[i]}</li>;
		tags_liste.push(tag);
	}

	let logement_rating = [];
	for (let i = 0; i < logement.rating; i++) {
		const idKey = "fs" + i;
		const full_stars = <i key={idKey} className="fa-solid fa-star full-star"></i>;
		logement_rating.push(full_stars);
	}
	if (logement.rating < 5) {
		const rating = 5 - logement.rating;
		for (let i = 0; i < rating; i++) {
			const idKey = "es" + i;
			const empty_stars = <i key={idKey} className="fa-solid fa-star empty-star"></i>;
			logement_rating.push(empty_stars);
		}
	}

	let equipements_liste = [];
	logement.equipments.forEach(function (item) {
		const equipement = <p key={item}>{item}</p>;
		equipements_liste.push(equipement);
	});

	return (
		<div>
			<img className="logements-items__img" src={logement.cover} alt={logement.title} />
			<div className="header-logement">
				<div className="header-logement__presentation">
					<h1 className="header-logement__title">{logement.title}</h1>
					<p className="header-logement__location">{logement.location}</p>
				</div>
				<div className="header-logement__host">
					<p className="header-logement__host-name">{logement.host.name}</p>
					<img
						className="header-logement__host-picture"
						src={logement.host.picture}
						alt={logement.host.name}
					/>
				</div>
			</div>
			<div className="logement-caracteristique">
				<ul className="logement-caracteristique__tag">{tags_liste}</ul>
				<div className="logement-caracteristique__rating">{logement_rating}</div>
			</div>
			<div className="logement-details">
				<Collapse titre="Description" content={<p>{logement.description}</p>} />
				<Collapse titre="Équipement" content={equipements_liste} />
			</div>
		</div>
	);
}
