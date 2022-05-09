import React from "react";
import "./Button.css";

function Button({ onClick, children, type }) {
	return (
		<button
			className='Button w-full relative text-white pt-0 pb-3 text-2xl border-b border-opacity-30 flex items-center justify-between'
			onClick={onClick}
			type={type}
		>
			{children}
			<span>→</span>
		</button>
	);
}

export default Button;
