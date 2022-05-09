import React from "react";
import Section from "../Section/Section";
import Profile from "./Profile";
import ComposeForm from "./ComposeForm";

function Compose() {
	return (
		<Section name='compose pt-20'>
			<div className='content-wrapper flex'>
				<Profile />
				<ComposeForm />
			</div>
		</Section>
	);
}

export default Compose;
