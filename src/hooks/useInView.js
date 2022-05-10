import React, { useEffect, useState } from "react";
import { useRef } from "react";

function useInView() {
	const [inView, setInView] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.unobserve(entry.target);
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		observer.observe(ref.current);
	}, []);

	return { ref, inView };
}

export default useInView;
