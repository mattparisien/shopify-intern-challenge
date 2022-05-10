import React from "react";
import { NavLink } from "react-router-dom";
import "./NavDesktop.css";

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
			<ul className='flex'>
				{navItems.map((item, i) => (
					<li key={i} className={i !== navItems.length - 1 && "pr-10"}>
						{" "}
						<NavLink to={item.path}>
							{item.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavDesktop;
