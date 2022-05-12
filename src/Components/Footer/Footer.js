import React from "react";
import Container from "../Container/Container";

function Footer() {
	return (
		<footer className='Footer w-screen'>
			<Container>
				<div className='flex-layout flex items-center justify-between text-sm text-cream w-full border-t py-3 opacity-50'>
					<h4>Shopify Intern Challenge</h4>
					<h4>Designed & Developed by Matthew Parisien</h4>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
