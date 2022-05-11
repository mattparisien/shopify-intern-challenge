import React from "react";
import FadeUpChildren from "../Animation/FadeUpChildren";
import Heading from "../Heading/Heading";
import ComposeForm from "./ComposeForm";

function Compose() {
	return (
		<div className='Compose h-3/6 md:w-3/6 mb-20 md:mb-0 md:sticky top-20  bg-cream'>
			<FadeUpChildren>
				<Heading>Compose a prompt</Heading>
				<ComposeForm />
			</FadeUpChildren>
		</div>
	);
}

export default Compose;
