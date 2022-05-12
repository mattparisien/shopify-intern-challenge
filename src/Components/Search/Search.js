import React from "react";
import SearchBar from "./SearchBar";
import Heading from "../Heading/Heading";
import FadeUpChildren from "../Animation/FadeUpChildren";
import classNames from "classnames";

function Search({ isActive }) {
	return (
		<div className={"Search w-full md:w-2/4 overflow-x-hidden"}>
			<div
				className={`header-search-bar-wrapper`}
				style={{
					transition: "all 0.8s cubic-bezier(0.86, 0, 0.07, 0.995) 0s",
					opacity: isActive ? 1 : 0,
					transform: `translateX(${isActive ? 0 : "-100%"})`,
				}}
			>
				<SearchBar />
			</div>
		</div>
	);
}

export default Search;
