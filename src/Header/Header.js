import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import NavDesktop from "./NavDesktop";
import "./Header.css";

function Header() {
	const [currentColor, setCurrentColor] = useState("white");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight - 50) {
				//If scroll position is passed hero section
				setCurrentColor("dark");
			} else if (window.scrollY < window.innerHeight) {
				setCurrentColor("white");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-20 bg-transparent text-${currentColor} z-50`}
		>
			<Container>
				<div className='content flex w-full h-full items-center justify-between'>
					<div className='header-logo transition ease duration-300 font-semibold'>
						Prompt it!
					</div>
					<NavDesktop />
				</div>
			</Container>
		</header>
	);
}

export default Header;

{/* <button
className='header-cta cursor-pointer'
onClick={() => window.scrollTo(0, window.innerHeight)}
>
<span className='pr-2 transition ease duration-300'>
	Start prompting{" "}
</span>
<ArrowBackIosNewIcon
	className='transition ease duration-300'
	sx={{ transform: "rotate(-90deg)", width: "1rem" }}
/>
</button> */}
