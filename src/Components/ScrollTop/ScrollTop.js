import React, { useEffect } from "react";

function ScrollTop({ children }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return children;
}

export default ScrollTop;
