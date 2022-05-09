import React from "react";

function FormError({ error }) {
	return (
		<div className='FormError text-red-400 text-left mt-2 font-semibold'>
			{error}
		</div>
	);
}

export default FormError; 

