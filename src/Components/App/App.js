import { createContext, useState } from "react";
import Header from "../../Header/Header";
import Compose from "../Compose/Compose";
import Results from "../Results/Results";
import Section from "../Section/Section";
import EntryScreen from "../EntryScreen/EntryScreen";
import Hero from "../Hero/Hero";
import ScrollTop from "../ScrollTop/ScrollTop";
import Footer from "../Footer/Footer";
import "./App.css";

export const GlobalContext = createContext();

function App() {
	const [listItems, setListItems] = useState([]);

	return (
		<GlobalContext.Provider value={{ listItems, setListItems }}>
			<ScrollTop>
				<div className='App bg-cream'>
					<EntryScreen />
					<Header />
					<Hero />

					<Section name='main'>
						<div className='flex-wrapper flex flex-col justify-between md:flex-row py-40 w-full'>
							<Compose />
							<Results />
						</div>
					</Section>
					<Footer />
				</div>
			</ScrollTop>
		</GlobalContext.Provider>
	);
}

export default App;
