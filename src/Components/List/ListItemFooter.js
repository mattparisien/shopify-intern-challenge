import moment from "moment";
import React, { useMemo } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

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
			{!isLiked && <LikeIcon />}
		</footer>
	);
}

function LikeIcon() {
	const variants = {
		hidden: {
			scale: 0,
		},
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.215, 0.61, 0.355, 1],
				delay: 0.1,
			},
		},
		exit: {
			scale: 0,
			duration: 0.5,
			ease: [0.215, 0.61, 0.355, 1],
		},
	};

	return (
		<motion.span variants={variants}>
			<FavoriteIcon sx={{ width: "1.3rem", fill: "pink" }} />
		</motion.span>
	);
}

export default ListItemFooter;
