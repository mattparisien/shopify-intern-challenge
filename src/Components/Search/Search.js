import React from "react";
import SearchBar from "./SearchBar";
import Heading from "../Heading/Heading";
import FadeUpChildren from "../Animation/FadeUpChildren";

function Search({ isActive }) {
	return (
		<div className='Search w-full md:w-2/4'>
			<FadeUpChildren>{isActive && <SearchBar />}</FadeUpChildren>
		</div>
	);
}

export default Search;
