import { useState } from "react";

export default function Carrousel({ images_array }) {
	console.log(images_array, images_array.length);
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
		<div className="carousel__wrapper">
			<i
				tabIndex="0"
				onClick={showPrevSet}
				className="fa-solid fa-chevron-left carousel_control carousel_control--prev"
			></i>
			<i
				tabIndex="0"
				onClick={showNextSet}
				className="fa-solid fa-chevron-right carousel_control carousel_control--next"
			></i>
			<div className="carousel__container">
				<img src={images_array[currentIndex]} alt={images_array[currentIndex]} />
			</div>
		</div>
	);
}
