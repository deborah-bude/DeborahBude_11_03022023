import { useState } from "react";

export default function Gallery({ images_array }) {
	const [currentIndex, changeCurrentIndex] = useState(0);

	function showPrevSet() {
		if (currentIndex === 0) {
			changeCurrentIndex(images_array.length - 1);
		} else {
			changeCurrentIndex(currentIndex - 1);
		}
	}

	function showNextSet() {
		if (currentIndex === images_array.length - 1) {
			changeCurrentIndex(0);
		} else {
			changeCurrentIndex(currentIndex + 1);
		}
	}

	return (
		<div className="caroussel_container">
			<i
				tabIndex="0"
				onClick={showPrevSet}
				onKeyDown={(e) => e.key === "Enter" && showPrevSet()}
				className="fa-solid fa-chevron-left caroussel_control caroussel_control--prev"
			></i>
			<i
				tabIndex="0"
				onClick={showNextSet}
				onKeyDown={(e) => e.key === "Enter" && showNextSet()}
				className="fa-solid fa-chevron-right caroussel_control caroussel_control--next"
			></i>
			<img
				className="caroussel_img"
				src={images_array[currentIndex]}
				alt={images_array[currentIndex]}
			/>
			<p className="caroussel_counter">
				{currentIndex + 1} / {images_array.length}
			</p>
		</div>
	);
}
