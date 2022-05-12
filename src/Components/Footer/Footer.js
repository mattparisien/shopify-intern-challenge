import React from "react";
import Container from "../Container/Container";
import Credits from "./Components/Credits";
import About from "./Components/About";

function Footer() {
	return (
		<footer className='Footer w-screen'>
			<Container flexDirection={"column"}>
				<About/>
				<Credits/>
			</Container>
		</footer>
	);
}

export default Footer;
