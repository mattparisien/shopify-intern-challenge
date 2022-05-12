import React, { useContext } from "react";
import FadeUpChildren from "../Animation/FadeUpChildren";
import { GlobalContext } from "../App/App";
import Heading from "../Heading/Heading";
import List from "../List/List";
import DefaultMessage from "./DefaultMessage";

function Results() {
	const { listItems, searchResults } = useContext(GlobalContext);

	return (
		<div className='Results w-full'>
			<FadeUpChildren>
				<Heading id='#anchor'>
					Your results{" "}
					<sup
						className='text-sm'
						style={{ verticalAlign: "top", left: "-0.2em", top: "-0.1em" }}
					>
						{listItems.length}
					</sup>
				</Heading>
				{listItems[0] && (
					<List items={searchResults ? searchResults : listItems} />
				)}
				{!listItems[0] && (
					<DefaultMessage message='Compose a prompt to get started' />
				)}
				{searchResults && !searchResults[0] && listItems[0] && (
					<DefaultMessage message='No results were found' />
				)}
			</FadeUpChildren>
		</div>
	);
}

export default Results;
