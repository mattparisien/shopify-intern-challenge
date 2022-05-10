import React from "react";
import Section from "../Section/Section";
import Compose from "../Compose/Compose";
import Results from "../Results/Results";

function MainInterface() {
	return (
		<Section name='main-interface'>
			<div className='flex-wrapper flex flex-col justify-between md:flex-row py-40 w-full'>
				<Compose />
				<Results />
			</div>
		</Section>
	);
}

export default MainInterface;
