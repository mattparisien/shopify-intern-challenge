import React from "react";
import SplitText from "../SplitText/SplitText";

function Heading(props) {
	return (
		<h2
			className='Heading text-dark text-4xl text-left pb-10 font-semibold'
			{...props}
		>
			{props.children}
		</h2>
	);
}

export default Heading;
