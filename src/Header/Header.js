import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import Container from "../Components/Container/Container";

function Header() {
	return (
		<header className='Header fixed top-0 left-0 w-screen h-20 bg-transparent text-white z-50'>
			<Container>
				<div className='content flex w-full h-full items-center justify-between'>
					<div className='header-logo'>Prompit.</div>
					<button className='header-cta'>
						<span className='pr-2'>Start prompting </span>
						<ArrowBackIosNewIcon
							sx={{ transform: "rotate(-90deg)", width: "1rem" }}
						/>
					</button>
				</div>
			</Container>
		</header>
	);
}

export default Header;
