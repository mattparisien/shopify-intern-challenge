import React from "react";
import Container from "../Components/Container/Container";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Header() {
	return (
		<header className='Header fixed top-0 left-0 w-screen h-20 bg-dark text-white flex items-center justify-between px-10 py-2'>
			<div className='header-logo'>Prompit.</div>
			<button className='header-cta'>
				<span className='pr-2'>Start prompting </span>
				<ArrowBackIosNewIcon
					sx={{ transform: "rotate(-90deg)", width: "1rem" }}
				/>
			</button>
		</header>
	);
}

export default Header;
