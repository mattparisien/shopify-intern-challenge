import { createContext, useEffect, useRef, useState } from "react";
import Header from "../../Header/Header";
import Cursor from "../Cursor";
import EntryScreen from "../EntryScreen/EntryScreen";
import Footer from "../Footer/Footer";
import Routes from "../Routes/Routes";
import ScrollTop from "../ScrollTop/ScrollTop";
import "./App.css";

export const GlobalContext = createContext();

function App() {
	const [listItems, setListItems] = useState([]);
	const scrollRef = useRef(null);

	useEffect(() => {
		console.log('This was a lot of fun to make 😎')
	}, [])

	return (
		<GlobalContext.Provider value={{ listItems, setListItems }}>
			<ScrollTop>
				<div className='App bg-cream'>
					<div className='scroll-wrapper' ref={scrollRef} data-scroll-container>
						<Header />
						<main>
							<EntryScreen />
							<Routes />
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
