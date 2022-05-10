import { createContext, useRef, useState } from "react";
import Header from "../../Header/Header";
import EntryScreen from "../EntryScreen/EntryScreen";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MainInterface from "../MainInterface/MainInterface";
import ScrollTop from "../ScrollTop/ScrollTop";
import "./App.css";

export const GlobalContext = createContext();

function App() {
	const [listItems, setListItems] = useState([]);
	const scrollRef = useRef(null);

	const deleteListItem = id => {
		setListItems(prevState => [
			...prevState.filter(listItem => listItem.id !== id),
		]);
	};
	const editListItem = id => {
		console.log("the id...", id);
	};

	const likeListItem = id => {};

	const ACTIONS = {
		delete: deleteListItem,
		edit: editListItem,
		like: likeListItem,
	};

	return (
		<GlobalContext.Provider value={{ listItems, setListItems, ACTIONS }}>
			<ScrollTop>
				<div className='App bg-cream'>
					<div className='scroll-wrapper' ref={scrollRef} data-scroll-container>
						<Header />

						<main>
							<EntryScreen />
							<Hero />
							<MainInterface />
						</main>
						<Footer />
					</div>
				</div>
			</ScrollTop>
			{/* <Cursor /> */}
		</GlobalContext.Provider>
	);
}

export default App;
