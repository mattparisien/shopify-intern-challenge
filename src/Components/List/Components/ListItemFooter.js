import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import React, { useMemo } from "react";

function ListItemFooter({ datePosted, isLiked }) {
	const date = useMemo(() => {
		if (datePosted) {
			return moment(datePosted).format("DD/MM/YYYY");
		}
	}, [datePosted]);

	return (
		<footer className='ListItemFooter border-t mt-5 pt-4 flex justify-between items-center'>
			<span className='time text-neutral-400 block  text-sm'>
				Posted on {date}
			</span>
			<LikeIcon isActive={isLiked} />
		</footer>
	);
}

function LikeIcon({ isActive }) {
	return (
		<span
			className={`LikeIcon block transition ease duration-300`}
			style={{ transform: `scale(${isActive ? 1 : 0})` }}
		>
			<FavoriteIcon sx={{ width: "1.3rem", fill: "pink" }} />
		</span>
	);
}

export default ListItemFooter;
