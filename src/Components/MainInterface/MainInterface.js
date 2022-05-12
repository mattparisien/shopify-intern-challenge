import React from "react";
import Compose from "../Compose/Compose";
import Results from "../Results/Results";
import Search from "../Search/Search";
import Section from "../Section/Section";

function MainInterface() {
	return (
		<>
			<Section name='MainInterface'>
				<div className='content-wrapper flex flex-col md:flex-row w-full py-20 md:y-40 h-screen'>
					<div className='flex flex-col mb-20 w-full md:w-2/4 md:pr-10 md:mb-0'>
						<Compose />
						<Search />
					</div>
					<div className='w-full md:w-2/4 md:pl-10'>
						<Results />
					</div>
				</div>
			</Section>
		</>
	);
}

export default MainInterface;
