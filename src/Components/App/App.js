import { createContext, useEffect, useRef, useState } from "react";
import Header from "../../Header/Header";
import Compose from "../Compose/Compose";
import EntryScreen from "../EntryScreen/EntryScreen";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Results from "../Results/Results";
import ScrollTop from "../ScrollTop/ScrollTop";
import Section from "../Section/Section";
import MainInterface from "../MainInterface/MainInterface";
import Cursor from "../Cursor";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "./App.css";

export const GlobalContext = createContext();

function App() {
	const [listItems, setListItems] = useState([]);
	const scrollRef = useRef(null);

	return (
		<GlobalContext.Provider value={{ listItems, setListItems }}>
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
			<Cursor />
		</GlobalContext.Provider>
	);
}

export default App;
