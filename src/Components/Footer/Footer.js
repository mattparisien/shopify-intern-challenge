import React from "react";
import Container from "../Container/Container";
import FadeUpChildren from "../Animation/FadeUpChildren";

function Footer() {
	return (
		<footer className='Footer w-screen'>
			<Container>
				<FadeUpChildren>
					<div className='flex-layout flex items-center justify-between text-sm text-neutral-400 w-full border-t py-3'>
						<h4>Shopify Intern Challenge</h4>
						<h4>Designed & Developed by Matthew Parisien</h4>
					</div>
				</FadeUpChildren>
			</Container>
		</footer>
	);
}

export default Footer;
