import React from "react";

function TextArea({ placeholder, value, name, onChange }) {
	return (
		<textarea
			className='TextArea text-dark bg-transparent border rounded-l w-full'
			name={name}
			value={value}
			placeholder={placeholder}
			style={{ resize: "none" }}
			onChange={onChange}
		/>
	);
}

export default TextArea;
