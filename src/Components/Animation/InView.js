import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function InView({ children }) {
	const [hasViewed, setHasViewed] = useState(false);

	const { ref, inView, entry } = useInView();

	useEffect(() => {
		if (inView && !hasViewed) {
			setHasViewed(true);
		}
	}, [inView, hasViewed]);

	return (
		<div
			className='InView'
			ref={ref}
			style={{ width: "100%", height: "100%" }}
		>
			{hasViewed && children}
		</div>
	);
}

export default InView;
