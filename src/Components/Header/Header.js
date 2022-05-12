import React, { useState } from "react";
import Container from "../Container/Container";
import Search from "../Search/Search";
import "./Header.css";
import SearchButton from "./SearchButton";

function Header() {
	const [searchActive, setSearchActive] = useState(false);

	const onClick = () => {
		setSearchActive(!searchActive);
	};

	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-20 bg-transparent text-cream z-50`}
		>
			<Container>
				<div className='content flex w-full h-full items-center justify-between'>
					<div className='header-logo transition ease duration-300 text-2xl'>
						Prompt it!
					</div>
					<div className='header-controls w-full flex items-center justify-end'>
						<Search isActive={searchActive} />
						<SearchButton onClick={onClick} />
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
