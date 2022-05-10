import React from "react";
import Hero from "../Hero/Hero";
import MainInterface from "../MainInterface/MainInterface";
import Page from "./Page";

function HomePage() {
	return (
		<>
			<Page name="home">
				<Hero />
				<MainInterface />
			</Page>
		</>
	);
}

export default HomePage;
