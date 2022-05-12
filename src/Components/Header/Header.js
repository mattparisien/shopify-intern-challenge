import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import Container from "../Container/Container";
import "./Header.css";

function Header() {
	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-20 bg-transparent text-cream z-50`}
		>
			<Container>
				<div className='content flex w-full h-full items-center justify-between'>
					<div className='header-logo transition ease duration-300 text-2xl'>
						Prompt it!
					</div>
					<button
						className='header-cta cursor-pointer hover:opacity-50 transition ease duration-300'
						onClick={() => window.scrollTo(0, window.innerHeight)}
					>
						<span className='pr-2 transition ease duration-300'>
							Start prompting{" "}
						</span>
						<ArrowBackIosNewIcon
							className='transition ease duration-300'
							sx={{ transform: "rotate(-90deg)", width: "1rem" }}
						/>
					</button>
				</div>
			</Container>
		</header>
	);
}

export default Header;
