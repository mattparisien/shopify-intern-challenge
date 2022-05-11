import React from "react";

function TextArea({ placeholder, value, name }) {
	return (
		<textarea
			className='TextArea text-dark bg-transparent border-b rounded-l w-full'
			name={name}
			value={value}
			placeholder={placeholder}
			style={{ resize: "none" }}
		/>
	);
}

export default TextArea;
