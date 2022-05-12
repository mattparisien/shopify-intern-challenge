import { useState, useCallback, useEffect } from "react";
import useScroll from "./useScroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const useScrollDirection = () => {
	const [direction, setDirection] = useState("down");

	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (scroll && scroll.scroll) {
			const handleScroll = e => {
				if (e.direction !== direction) {
					setDirection(e.direction);
				}
			};

			scroll.scroll.on("scroll", handleScroll);
		}
	}, [scroll, direction]);

	return direction;
};

export default useScrollDirection;
