import { useState } from "react";

export default function Collapse(content_collape) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="collapse">
			<div onClick={() => setIsOpen(!isOpen)} className="collapse__title">
				<p>{content_collape.titre}</p>
				<i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
			</div>
			{isOpen && <div className="collapse__content">{content_collape.content}</div>}
		</div>
	);
}
