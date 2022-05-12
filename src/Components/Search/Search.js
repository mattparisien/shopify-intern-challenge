import React from "react";
import SearchBar from "./SearchBar";
import Heading from "../Heading/Heading";
import FadeUpChildren from "../Animation/FadeUpChildren";

function Search() {
	return (
		<div className='Search w-full'>
			<FadeUpChildren>
				<Heading>Search Results</Heading>
				<SearchBar />
			</FadeUpChildren>
		</div>
	);
}

export default Search;
