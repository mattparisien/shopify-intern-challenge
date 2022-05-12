import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SearchButton({ onClick, isSearchActive }) {

	console.log('hello')

	return (
		<button
			className={`SearchButton relative hover:scale-150 is-${
				isSearchActive ? "close" : "loop"
			}`}
			style={{ transition: "0.8s cubic-bezier(.86,0,.07,.995)" }}
			onClick={onClick}
		>
			<SearchIcon
				sx={{ fill: "white", position: "absolute", top: 0, left: 0 }}
				exit='exit'
				animate='enter'
				className='loop-icon'
			/>
			<CloseIcon className='close-icon opacity-0' />
		</button>
	);
}

export default React.memo(SearchButton);
