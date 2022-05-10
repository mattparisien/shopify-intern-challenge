import React from "react";
import { NavLink } from "react-router-dom";

function NavDesktop() {
	const navItems = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "About",
			path: "/about",
		},
	];

	return (
		<nav className='NavDesktop'>
			<ul>
				{navItems.map((item, i) => (
					<li key={i}>
						{" "}
						<NavLink to={item.path}>{item.title}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavDesktop;
