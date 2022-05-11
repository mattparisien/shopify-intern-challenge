import React from "react";
import FadeUpChildren from "../Animation/FadeUpChildren";
import Heading from "../Heading/Heading";
import ComposeForm from "./ComposeForm";

function Compose() {
	return (
		<div className='Compose mb-20 md:sticky top-20 bg-cream w-full'>
			<FadeUpChildren>
				<Heading>Compose a prompt</Heading>
				<ComposeForm />
			</FadeUpChildren>
		</div>
	);
}

export default Compose;
