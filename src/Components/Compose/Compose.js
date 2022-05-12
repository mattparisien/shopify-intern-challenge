import React from "react";
import FadeUpChildren from "../Animation/FadeUpChildren";
import Heading from "../Heading/Heading";
import ComposeForm from "./ComposeForm";

function Compose() {
	return (
		<div className='Compose flex justify-between mb-20 top-20 w-full'>
			<Heading>Compose a prompt</Heading>
			<ComposeForm />
		</div>
	);
}

export default Compose;
