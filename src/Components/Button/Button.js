import React from "react";
import "./Button.css";

function Button({ onClick, children, type, isLoading }) {
	return (
		<button
			className='Button rounded-lg px-5 py-2 relative text-dark  text-xl bg-white border-opacity-30 flex items-center justify-between'
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
}

export default Button;
