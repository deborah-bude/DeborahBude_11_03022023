import { React } from "react";
import { useParams, Navigate } from "react-router-dom";
import logementsData from "../../logements.json";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";

export default function LogementDetails() {
	const params = useParams();
	const logement = redirectionLogements(params.id);

	return <main className="corps-page">{logement}</main>;
}

function redirectionLogements(idLogement) {
	const actualLogement = logementsData.find((p) => p.id === idLogement);
	if (actualLogement !== undefined) {
		return templateLogement(actualLogement);
	}
	return <Navigate to="/page-non-trouvee" replace={true} />;
}

function templateLogement(logement) {
	const logement_tags = logement.tags.map((tag, index) => {
		const idKey = "t" + index;
		return <li key={idKey}>{tag}</li>;
	});

	const logement_rating = new Array(5).fill(0).map((el, index) => {
		const idKey = "r" + index;
		if (logement.rating > index) {
			return <i key={idKey} className="fa-solid fa-star full-star"></i>;
		}
		return <i key={idKey} className="fa-solid fa-star empty-star"></i>;
	});

	const logement_equipements = logement.equipments.map((equipement, index) => {
		const idKey = "t" + index;
		return <p key={idKey}>{equipement}</p>;
	});

	const host_firstName = logement.host.name.split(" ")[0];
	const host_name = logement.host.name.split(" ")[1];

	return (
		<div>
			<Gallery images_array={logement.pictures} />
			<div className="header-logement">
				<div className="header-logement__presentation">
					<h1 className="header-logement__title">{logement.title}</h1>
					<p className="header-logement__location">{logement.location}</p>
					<ul className="header-logement__tag">{logement_tags}</ul>
				</div>
				<div className="logement__host">
					<div className="logement__host-profile">
						<div className="logement__host-name">
							<p>{host_firstName}</p>
							<p>{host_name}</p>
						</div>
						<img
							className="logement__host-picture"
							src={logement.host.picture}
							alt={logement.host.name}
						/>
					</div>
					<div className="logement__host-rating">{logement_rating}</div>
				</div>
			</div>
			<div className="logement-details">
				<Collapse titre="Description" content={<p>{logement.description}</p>} />
				<Collapse titre="Équipement" content={logement_equipements} />
			</div>
		</div>
	);
}
