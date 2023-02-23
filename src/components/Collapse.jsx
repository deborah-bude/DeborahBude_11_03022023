import { useState } from "react";

export default function Collapse(content_collape) {
	const [isOpen, setIsOpen] = useState(false);

	return isOpen ? (
		<div className="collapse">
			<div onClick={() => setIsOpen(isOpen ? false : true)} className="collapse__title">
				<p>{content_collape.titre}</p>
				<i className="fa-solid fa-chevron-down"></i>
			</div>
			<div className="collapse__content">{content_collape.content}</div>
		</div>
	) : (
		<div className="collapse">
			<div onClick={() => setIsOpen(isOpen ? false : true)} className="collapse__title">
				<p>{content_collape.titre}</p>
				<i className="fa-solid fa-chevron-up"></i>
			</div>
		</div>
	);
}
