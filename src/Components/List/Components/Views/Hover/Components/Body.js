import React from "react";

function Body({ prompt, response }) {
	return (
		<div className='HoverView_Body'>
			<div className='prompt-wrapper mb-10'>
				<h3 className='promp-title text-xl font-semibold'>Your prompt</h3>
				<p className='font-cardinal text-4xl w-3/4'>{prompt}</p>
			</div>
			<div className='response-wrapper'>
				<h3 className='response-title text-xl font-semibold mt-5'>Response</h3>
				<p className='font-cardinal text-4xl w-3/4'>{response}</p>
			</div>
		</div>
	);
}

export default Body;
