import React from "react";
import "./ListItem.css";

function ListItem({ prompt, response }) {
	console.log(prompt, response);

	return (
		<li className='ListItem text-white flex flex-col rounded-l text-left bg-neutral-800'>
			<h5>{prompt}</h5>
			<h5>{response}</h5>
		</li>
	);
}

export default ListItem;
