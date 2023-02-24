import { useState } from "react";

export default function Carrousel({ images_array }) {
	console.log(images_array, images_array.length);
	const [currentIndex, changeCurrentIndex] = useState(0);
	console.log(currentIndex);

	function showPrevSet() {
		console.log("Index actuel : " + currentIndex);
		if (currentIndex === 0) {
			changeCurrentIndex(images_array.length - 1);
		} else {
			changeCurrentIndex(currentIndex - 1);
		}
		console.log("Index précédent : " + currentIndex);
	}

	function showNextSet() {
		console.log("Index actuel : " + currentIndex);
		if (currentIndex === images_array.length - 1) {
			changeCurrentIndex(0);
		} else {
			changeCurrentIndex(currentIndex + 1);
		}
		console.log("Index suivant : " + currentIndex);
	}

	return (
		<div className="carousel__wrapper">
			<div className="carousel__container">
				<img src={images_array[currentIndex]} alt={images_array[currentIndex]} />
			</div>
			<div className="carousel__controls">
				<i onClick={showPrevSet} className="fa-solid fa-chevron-left"></i>
				<i onClick={showNextSet} className="fa-solid fa-chevron-right"></i>
			</div>
		</div>
	);
}
