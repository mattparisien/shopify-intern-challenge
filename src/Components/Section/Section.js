import React from "react";

function Section({ name, children }) {
	return (
		<section className={`Section Section_${name} w-full`}>
			<div className='container w-full mx-auto'>{children}</div>
		</section>
	);
}

export default Section;
