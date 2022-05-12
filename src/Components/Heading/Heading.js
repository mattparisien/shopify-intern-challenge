import React from "react";

function Heading(props) {
	return (
		<h2
			className='Heading text-cream text-4xl text-left pb-10'
			{...props}
		>
			{props.children}
		</h2>
	);
}

export default Heading;
