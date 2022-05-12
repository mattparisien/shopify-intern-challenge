import React from "react";
import SearchBar from "./SearchBar";
import Heading from "../Heading/Heading";
import FadeUpChildren from "../Animation/FadeUpChildren";
import classNames from "classnames";

function Search({ isActive }) {
	return (
		<div className={"Search w-full md:w-2/4 overflow-x-hidden"}>
			<FadeUpChildren>
				<div
					className={`header-search-bar-wrapper opacity-${
						isActive ? 1 : 0
					} translate-x-${isActive ? 0 : "full"}`}
					style={{
						transition: "all 0.8s cubic-bezier(0.86, 0, 0.07, 0.995) 0s",
					}}
				>
					<SearchBar />
				</div>
			</FadeUpChildren>
		</div>
	);
}

export default Search;
