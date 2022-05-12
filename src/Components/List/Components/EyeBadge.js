import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Remove } from "@mui/icons-material";

function EyeBadge() {
	return (
		<div className='EyeBadge w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center absolute right-0 top-0'>
			<RemoveRedEyeIcon style={{ fill: "grey" }} />
		</div>
	);
}

export default EyeBadge;
