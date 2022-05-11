import React from "react";
import Section from "../Section/Section";
import Compose from "../Compose/Compose";
import Results from "../Results/Results";
import Search from "../Search/Search";
import Flex from "../Flex/Flex";
import "./MainInterface.css";

function MainInterface() {
	return (
		<>
			<Section name='MainInterface'>
				<Flex direction='row' containerWidth='full' py={"40"} breakOnMobile>
					<Flex
						justifyContent='between'
						alignItems={"start"}
						direction='col'
						containerWidth='2/4'
						pr={"10"}
						breakOnMobile
						extraClasses="md:sticky"
					>
						<Compose />
						<Search />
					</Flex>
					<Flex containerWidth={"2/4"} pl={"10"} position="relative">
						<Results />
					</Flex>
				</Flex>
			</Section>
		</>
	);
}

export default MainInterface;
