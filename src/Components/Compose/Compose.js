import React from "react";
import Section from "../Section/Section";
import Profile from "./Profile";
import ComposeForm from "./ComposeForm";
import Heading from "../Heading/Heading";

function Compose() {
	return (
		<div className='Compose md:w-3/6'>
			<Heading>Compose a prompt</Heading>
			<ComposeForm />
		</div>
	);
}

export default Compose;
