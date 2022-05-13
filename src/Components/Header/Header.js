import classNames from "classnames";
import React, { useState } from "react";
import useScroll from "../../hooks/useScroll";
import useScrollDirection from "../../hooks/useScrollDirection";
import Container from "../Container/Container";
import Search from "../Search/Search";
import "./Header.css";
import SearchButton from "./SearchButton";

function Header() {
	const [searchActive, setSearchActive] = useState(false);
	const [headerColor, setHeaderColor] = useState("transparent");

	const direction = useScrollDirection();

	const handleScroll = e => {
		if (e.scroll.y > window.innerHeight && headerColor !== "dark") {
			setHeaderColor("dark");
		} else if (
			e.scroll.y < window.innerHeight &&
			headerColor !== "transparent"
		) {
			setHeaderColor("transparent");
		}
	};

	useScroll(handleScroll);

	const onClick = () => {
		setSearchActive(!searchActive);
	};

	const headerClasses = classNames(
		`Header fixed left-0 w-screen h-12 bg-${headerColor} text-cream z-50 pointer-events-all`,
		{
			["-top-20"]: direction === "down" && !searchActive,
			["top-0"]: direction === "up",
		}
	);

	return (
		<header className={headerClasses}>
			<Container>
				<div className='content flex w-full h-full items-center justify-between'>
					<div className='header-logo transition ease duration-300 text-lg text-left flex-1'>
						Pr●mpt it!
					</div>
					<div className='header-controls flex-1 flex items-center justify-end'>
						<Search isActive={searchActive} />
						<SearchButton onClick={onClick} isSearchActive={searchActive} />
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
