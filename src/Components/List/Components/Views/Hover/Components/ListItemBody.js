import React from "react";
import { useContext } from "react";
import { ListItemContext } from "../../../ListItem";

function ListItemBody() {
	
	const { prompt, response } = useContext(ListItemContext);

	return (
		<div className='ListItemBody'>
			<h3 className='promp-title text-xl font-semibold'>Your prompt</h3>
			<p>{prompt}</p>
			<h3 className='response-title text-xl font-semibold mt-5'>Response</h3>
			<p>{response}</p>
		</div>
	);
}

export default ListItemBody;
