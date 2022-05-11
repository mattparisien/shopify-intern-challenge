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

	const ACTIONS = {
		delete: deleteListItem,
		like: likeListItem,
		unlike: unlikeListItem,
	};

	return (
		<GlobalContext.Provider value={{ listItems, setListItems, ACTIONS }}>
			<ScrollTop>
				<div className='App bg-cream'>
					<Header />

					<main>
						<EntryScreen />
						<Hero />
						<MainInterface />
					</main>
					<Footer />
				</div>
			</ScrollTop>
		</GlobalContext.Provider>
	);
}

export default App;
