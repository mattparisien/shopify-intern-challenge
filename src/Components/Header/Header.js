import React, { useState } from "react";
import Container from "../Container/Container";
import Search from "../Search/Search";
import "./Header.css";
import SearchButton from "./SearchButton";
import useScroll from "../../hooks/useScroll";

function Header() {
	const [searchActive, setSearchActive] = useState(false);

	const onClick = () => {
		setSearchActive(!searchActive);
	};

	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-12 bg-dark text-cream z-50`}
		>
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
