import { createContext, useRef, useState } from "react";
import Header from "../../Header/Header";
import Compose from "../Compose/Compose";
import EntryScreen from "../EntryScreen/EntryScreen";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Results from "../Results/Results";
import ScrollTop from "../ScrollTop/ScrollTop";
import Section from "../Section/Section";
import MainInterface from "../MainInterface/MainInterface";
import "./App.css";

export const GlobalContext = createContext();

function App() {
	const [listItems, setListItems] = useState([]);

	return (
		<GlobalContext.Provider value={{ listItems, setListItems }}>
			<ScrollTop>
				<div className='App bg-cream'>
					<main >
						<EntryScreen />
						<Header />
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
