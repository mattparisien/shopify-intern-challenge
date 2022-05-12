import { useEffect, useState, useRef, useCallback } from "react";

export default function useMouseEnter() {
	const [isEnter, setIsEnter] = useState(false);
	const ref = useRef(null);
	const toggleEnter = useCallback(() => {
		setIsEnter(!isEnter);
	}, [isEnter]);

	useEffect(() => {
		const handleMouseEnter = e => {
			toggleEnter();
		};

		const handleMouseLeave = e => {
			toggleEnter();
		};

		ref.current.addEventListener("mouseenter", e => handleMouseEnter(e));
		ref.current.addEventListener("mouseleave", e => handleMouseLeave(e));

		// return () => {
		// 	ref.current.removeEventListener("mouseenter", handleMouseEnter);
		// 	ref.current.removeEventListener("mouseleave", handleMouseLeave);
		// };
	}, [isEnter]);

	return { ref, isEnter };
}
