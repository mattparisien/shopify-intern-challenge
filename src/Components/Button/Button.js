import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import classNames from "classnames";

function Button({ onClick, children, type, isLoading, variant }) {
	const baseClasses =
		"Button py-0.5 px-2.5 rounded-lg flex items-center justify-center relative text-cream text-3xl uppercase transition ease duration-300";
	const outlineClasses = "Button_outline border-2 hover:bg-cream hover:text-dark";
	const fillClasses =
		"Button_fill bg-cream text-dark hover:bg-blue-custom hover:text-cream";
	const buttonClasses = classNames(baseClasses, {
		[outlineClasses]: variant === "outline",
		[fillClasses]: variant === "fill",
	});

	const labelClasses = classNames("button-label", {
		"opacity-0": isLoading,
	});

	return (
		<button
			className={buttonClasses}
			onClick={onClick}
			type={type}
			style={{ borderRadius: "2rem" }}
		>
			<span className={labelClasses}>{children}</span>
			{isLoading && (
				<CircularProgress
					className='absolute'
					style={{ color: "white", width: "2rem", height: "2rem" }}
				/>
			)}
		</button>
	);
}

export default Button;
