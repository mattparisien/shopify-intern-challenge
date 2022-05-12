import React from "react";

function Input({ placeholder, value, name, onChange }) {
	return (
		<input
			className='Input text-cream bg-transparent border-b  w-full focus:outline-none placeholder-cream placeholder-mb-4'
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			autoFocus
		/>
	);
}

export default Input;

