import React, { useContext } from "react";
import { GlobalContext } from "../App/App";
import Heading from "../Heading/Heading";
import List from "../List/List";

function Results() {
	const { listItems } = useContext(GlobalContext);
	return (
		<div className='Results md:w-3/6 md:ml-20'>
			<Heading id="#anchor">Your results</Heading>
			{listItems[0] && <List items={listItems} />}
			{!listItems[0] && (
				<p className='text-neutral-500 text-left' id="scroll-anchor">
					Compose a prompt to get started
				</p>
			)}
		</div>
	);
}

export default Results;
