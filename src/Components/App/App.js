import { createContext, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import EntryScreen from "../EntryScreen/EntryScreen";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import MainInterface from "../MainInterface/MainInterface";
import ScrollTop from "../ScrollTop/ScrollTop";
import "./App.css";

export const GlobalContext = createContext();

function App() {
	const [listItems, setListItems] = useState([]);
	const [searchResults, setSearchResults] = useState(null);
	const [cursorStyle, setCursorStyle] = useState("OUTLINE");

	const toggleCursorStyle = () => {
		setCursorStyle(prevStyle => (prevStyle === "OUTLINE" ? "FILL" : "OUTLINE"));
	};

	const deleteListItem = id => {
		setListItems(prevState => [
			...prevState.filter(listItem => listItem.id !== id),
		]);
	};

	const likeListItem = id => {
		setListItems(prevState => {
			const newState = [...prevState];
			const likedItem = newState.find(item => item.id === id);
			likedItem["isLiked"] = true;

			const newObject =
				newState[newState.indexOf(newState.find(x => x.id === id))];
			const location = newState.findIndex(x => x.id === id);
			newState[location] = newObject;

			return newState;
		});
	};

	const unlikeListItem = id => {
		setListItems(prevState => {
			const newState = [...prevState];
			const likedItem = newState.find(item => item.id === id);
			likedItem["isLiked"] = false;

			const newObject =
				newState[newState.indexOf(newState.find(x => x.id === id))];
			const location = newState.findIndex(x => x.id === id);
			newState[location] = newObject;

			return newState;
		});
	};

	const setSearch = searchTerm => {
		if (!searchTerm || searchTerm === "") {
			setSearchResults(null);
			return;
		}

		const items = listItems;

		const results = items.filter(item =>
			item.prompt
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase() ||
						item.response.toLowerCase().includes(searchTerm.toLowerCase())
				)
		);
		setSearchResults(results);
	};

	const ACTIONS = {
		delete: deleteListItem,
		like: likeListItem,
		unlike: unlikeListItem,
		setSearch: setSearch,
		toggleCursor: toggleCursorStyle,
	};

	const contextObj = {
		listItems,
		cursorStyle,
		setListItems,
		searchResults,
		ACTIONS,
	};

	const scrollRef = useRef(null);

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
			}}
			watch={[]}
			containerRef={scrollRef}
		>
			<GlobalContext.Provider value={contextObj}>
				<ScrollTop>
					<div className='App bg-cream'>
						<Header />
						<div
							className='scroll-wrapper'
							data-scroll-container
							ref={scrollRef}
						>
							<main>
								<EntryScreen />
								<Hero />
								<MainInterface />
							</main>
							<Footer />
							{/* <Cursor /> */}
						</div>
					</div>
				</ScrollTop>
			</GlobalContext.Provider>
		</LocomotiveScrollProvider>
	);
}

export default App;
