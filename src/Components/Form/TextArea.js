import React from "react";

function TextArea({ placeholder, value, name, onChange }) {
	return (
		<textarea
			className='TextArea text-cream bg-transparent border rounded-xl h-40 p-2 w-full placeholder-neutral-400'
			name={name}
			value={value}
			placeholder={placeholder}
			style={{ resize: "none" }}
			onChange={onChange}
			autoFocus
		/>
	);
}

export default TextArea;
