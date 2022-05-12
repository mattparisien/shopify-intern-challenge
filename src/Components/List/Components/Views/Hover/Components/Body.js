import React from "react";
import { useContext } from "react";
import { ListItemContext } from "../../../ListItem";

function Body() {
	
	const { prompt, response } = useContext(ListItemContext);

	return (
		<div className='HoverView_Body'>
			{/* <h3 className='promp-title text-xl font-semibold'>Your prompt</h3> */}
			{/* <p>{prompt}</p> */}
			{/* <h3 className='response-title text-xl font-semibold mt-5'>Response</h3> */}
			<p className="font-cardinal text-4xl w-3/4">{response}</p>
		</div>
	);
}

export default Body;
