import { useState } from "react";
import useScroll from "./useScroll";

const useScrollDirection = () => {
	const [direction, setDirection] = useState("down");

	const scrollHandler = e => {
		if (e.direction !== direction) {
			setDirection(e.direction);
		}
	};

	useScroll(scrollHandler);

	return direction;
};

export default useScrollDirection;
