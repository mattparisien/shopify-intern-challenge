import React, { useContext } from "react";
import { GlobalContext } from "../../../App/App";

function ListItemEdit() {
	const { prompt, response } = useContext(GlobalContext);

	return (
		<div className='ListItemEdit'>
			<form>
				<h3 className='promp-title text-xl font-semibold'>Your prompt</h3>
				<input placeholder={prompt}/>
				<h3 className='response-title text-xl font-semibold mt-5'>Response</h3>
				<p>{response}</p>
			</form>
		</div>
	);
}

export default ListItemEdit;
