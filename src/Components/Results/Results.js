import React from "react";
import Section from "../Section/Section";
import List from "../List/List";
import Heading from "../Heading/Heading";
import { GlobalContext } from "../App/App";
import { useContext } from "react";

function Results() {
	const { listItems } = useContext(GlobalContext);
	return (
		<div className='Results md:w-3/6 md:ml-20'>
			<Heading>Your results</Heading>
			{listItems[0] && <List items={listItems} />}
			{!listItems[0] && (
				<p className='text-neutral-500 text-left '>
					Compose a prompt to get started
				</p>
			)}
		</div>
	);
}

export default Results;
