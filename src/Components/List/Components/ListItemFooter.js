import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import React, { useEffect, useMemo } from "react";
import useInterval from "../../../hooks/useInterval";

function ListItemFooter({ datePosted, isLiked }) {
	const { pinger } = useInterval(500);

	const date = useMemo(() => {
		if (datePosted) {
			return moment(datePosted).fromNow();
		}
	}, [datePosted, pinger]);

	return (
		<footer className='ListItemFooter border-t mt-5 pt-4 flex justify-between items-center'>
			<span className='time text-neutral-400 block  text-sm'>
				Posted {date}
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
