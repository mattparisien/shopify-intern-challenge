import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListItemPopover from "./ListItemPopover";

function MoreButton({ togglePopover }) {
	const handleClick = () => {};

	return (
		<button
			className='MoreButton absolute top-0 right-0 p-4 transition ease duration-300 hover:opacity-30'
			onClick={togglePopover}
		>
			<MoreHorizIcon />
		</button>
	);
}

export default MoreButton;
