import { useState } from "react";
import Header from "../../Header/Header";
import Container from "../Container/Container";
import Form from "../Form/Form";
import List from "../List/List";
import Compose from "../Compose/Compose";
import "./App.css";

function App() {
	const [listItems, setListItems] = useState([]);

	return (
		<div className='App bg-dark'>
			<Header/>
			<Compose/>
				{/* <div className='content flex w-full h-full items-center justify-between'>
					<Form listItems={listItems} setListItems={setListItems} />
					<List items={listItems} />
				</div> */}
			
		</div>
	);
}

export default App;
