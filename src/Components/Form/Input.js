import React from "react";

function Input({ placeholder, value, name, onChange }) {
	return (
		<input
			className='Input text-dark bg-transparent border-b rounded-l w-full focus:outline-none'
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			autoFocus
		/>
	);
}

export default Input;

