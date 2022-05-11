import React, { useContext } from "react";
import FadeUpChildren from "../Animation/FadeUpChildren";
import { GlobalContext } from "../App/App";
import Heading from "../Heading/Heading";
import List from "../List/List";

function Results() {
	const { listItems } = useContext(GlobalContext);
	return (
		<div className='Results w-full'>
			<FadeUpChildren>
				<Heading id='#anchor'>Your results</Heading>
				{listItems[0] && <List items={listItems} />}
				{!listItems[0] && (
					<p className='text-neutral-500 text-left' id='scroll-anchor'>
						Compose a prompt to get started
					</p>
				)}
			</FadeUpChildren>
		</div>
	);
}

export default Results;
