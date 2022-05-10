import React from "react";
import Heading from "../Heading/Heading";
import ComposeForm from "./ComposeForm";

function Compose() {
	return (
		<div className='Compose h-3/6 md:w-3/6 mb-20 md:mb-0 md:sticky top-20  bg-cream'>
			<Heading>Compose a prompt</Heading>
			<ComposeForm />
		</div>
	);
}

export default Compose;
