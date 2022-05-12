import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import Container from "../Container/Container";
import Search from "../Search/Search";
import SearchButton from "./SearchButton";
import "./Header.css";

function Header() {

	const [searchActive, setSearchActive] = useState(false);

	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-20 bg-transparent text-cream z-50`}
		>
			<Container>
				<div className='content flex w-full h-full items-center justify-between'>
					<div className='header-logo transition ease duration-300 text-2xl'>
						Prompt it!
					</div>
					<Search/>
					<SearchButton/>
				</div>
			</Container>
		</header>
	);
}

export default Header;
