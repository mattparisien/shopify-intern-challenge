import React from "react";
import Compose from "../Compose/Compose";
import Results from "../Results/Results";
import Search from "../Search/Search";
import Section from "../Section/Section";

function MainInterface() {
	return (
		<>
			<Section name='MainInterface'>
				<div className='content-wrapper flex w-full py-40'>
					<div className='flex flex-col w-2/4 pr-10'>
						<Compose />
						<Search />
					</div>
					<div className="w-2/4 pl-10">
						<Results />
					</div>
				</div>
			</Section>
		</>
	);
}

export default MainInterface;
