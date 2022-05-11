import React from "react";

function DefaultMessage({ message }) {
	return (
		<p className='DefaultMessage text-neutral-500 text-left' id='scroll-anchor'>
			{message}
		</p>
	);
}

export default DefaultMessage;
