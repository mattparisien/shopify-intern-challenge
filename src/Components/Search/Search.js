import React from "react";
import SearchBar from "./SearchBar";
import Heading from "../Heading/Heading";

function Search() {
	return (
		<div className='Search w-full'>
			<Heading>Search Results</Heading>
			<SearchBar />
		</div>
	);
}

export default Search;
