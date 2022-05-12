import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import classNames from "classnames";

function Button({ onClick, children, type, isLoading, variant }) {
	const baseClasses =
		"Button py-0.5 px-2.5 rounded-lg flex items-center justify-center relative text-cream text-3xl uppercase transition ease duration-300";
	const outlineClasses = "border-2 hover:bg-cream hover:text-dark";
	const fillClasses = "bg-cream text-dark hover:bg-blue-custom hover:text-cream";
	const buttonClasses = classNames(baseClasses, {
		[outlineClasses]: variant === "outline",
		[fillClasses]: variant === "fill",
	});

	return (
		<button
			className={buttonClasses}
			onClick={onClick}
			type={type}
			style={{ borderRadius: "2rem" }}
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
