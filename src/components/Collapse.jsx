import React from "react";

export default function Collapse(content_collape) {
	return (
		<div className="collapse">
			<div className="collapse__title">
				<p>{content_collape.titre}</p>
				<i className="fa-solid fa-chevron-down"></i>
			</div>
			<div className="collapse__content">{content_collape.content}</div>
		</div>
	);
}
