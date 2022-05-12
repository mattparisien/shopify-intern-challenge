import { useEffect, useState } from "react";

export default function useMouseMove() {
	const [coords, setCoords] = useState({
		pageX: 0,
		pageY: 0,
	});

	useEffect(() => {
		const handleMouseMove = e => {
			setCoords({
				pageX: e.clientX,
				pageY: e.clientY,
			});
		};

		window.addEventListener("mousemove", e => handleMouseMove(e));

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return coords;
}
