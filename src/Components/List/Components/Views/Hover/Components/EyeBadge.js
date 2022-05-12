import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function EyeBadge({ isEnter }) {
	const badgeStyle = {
		transition: "transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 0.995) 7s",
	};

	return (
		<div
			className={`EyeBadge w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center absolute right-0 top-0 scale-${
				isEnter ? 100 : 0
			}`}
			style={badgeStyle}
		>
			<RemoveRedEyeIcon style={{ fill: "grey" }} />
		</div>
	);
}

export default EyeBadge;
