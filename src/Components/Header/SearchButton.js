import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchButton({ onClick }) {
	return (
		<button
			className='SearchButton hover:scale-150'
			style={{ transition: "0.8s cubic-bezier(.86,0,.07,.995)" }}
			onClick={onClick}
		>
			<SearchIcon sx={{ fill: "white" }} />
		</button>
	);
}

export default SearchButton;
