import React from "react";
import "./Button.css";
import CircularProgress from "@mui/material/CircularProgress";

function Button({ onClick, children, type, isLoading }) {
	return (
		<button
			className='Button w-40 h-10 rounded-lg flex items-center justify-center  relative text-cream text-lg bg-dark border-opacity-30 transition ease delay-100 hover:bg-blue-400'
			onClick={onClick}
			type={type}
		>
			{isLoading ? (
				<CircularProgress
					style={{ width: "1rem", height: "1rem", color: "white" }}
				/>
			) : (
				children
			)}
		</button>
	);
}

export default Button;
