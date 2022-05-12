import { motion } from "framer-motion";
import React, { createContext, useState } from "react";
import "./ListItem.css";
import DefaultView from "./Views/Default/DefaultView";
import HoverView from "./Views/Hover/HoverView";

export const ListItemContext = createContext();

function ListItem(props) {
	const [popoverActive, setPopoverActive] = useState(false);
	const [isHover, setIsHover] = useState(false);

	const variants = {
		hidden: {
			opacity: 0,
			y: "100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.215, 0.61, 0.355, 1],
				duration: 0.4,
			},
		},
	};

	const contextObj = {
		...props,
		isHover,
	};

	return (
		<ListItemContext.Provider value={contextObj}>
			<motion.li
				className={`ListItem relative text-${isHover ? "dark" : "cream"} bg-${
					isHover ? "cream" : "dark"
				} flex flex-col justify-center rounded-l text-left border border-neutral-500 pt-8 pb-4 px-5 w-full shadow-custom`}
				variants={variants}
				initial='hidden'
				animate={"visible"}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{isHover ? <HoverView /> : <DefaultView postedAt={props.datePosted} isLiked={props.isLiked}/>}
			</motion.li>
		</ListItemContext.Provider>
	);
}

export default ListItem;
