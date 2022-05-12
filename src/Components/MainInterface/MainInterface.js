import React from "react";
import Compose from "../Compose/Compose";
import Results from "../Results/Results";
import Search from "../Search/Search";
import Section from "../Section/Section";

function MainInterface() {
	return (
		<>
			<Section name='MainInterface'>
				<div
					className='content-wrapper flex flex-col relative w-full py-20 md:y-40  border-t'
					style={{ minHeight: "100vh" }}
				>
					<div className='absolute text-cream top-0 left-0 text-xs pt-3'>
						{" "}
						● Your dashboard
					</div>
					<div className='flex flex-col mb-20 w-full md:pr-10 md:mb-0'>
						<Compose />
						<Search />
					</div>
					<div className='w-full  '>
						<Results />
					</div>
				</div>
			</Section>
		</>
	);
}

export default MainInterface;
