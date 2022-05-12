import { motion } from "framer-motion";
import React, { createContext, useState } from "react";
import "./ListItem.css";
import DefaultView from "./Views/Default/DefaultView";
import HoverView from "./Views/Hover/HoverView";
import { variants } from "./animations";
export const ListItemContext = createContext();

function ListItem(props) {
	const [isHover, setIsHover] = useState(false);

	const contextObj = {
		...props,
		isHover,
	};

	return (
		<ListItemContext.Provider value={contextObj}>
			<motion.li
				className={`ListItem is-view-${
					isHover ? "hover" : "default"
				} relative will-change-height text-${isHover ? "dark" : "cream"} bg-${
					isHover ? "cream" : "dark"
				} flex flex-col justify-center rounded-l text-left border border-neutral-500 pt-8 pb-4 px-5 w-full shadow-custom`}
				variants={variants}
				initial='hidden'
				animate={"visible"}
				exit='exit'
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{isHover ? (
					<HoverView />
				) : (
					<DefaultView
						postedAt={props.datePosted}
						isLiked={props.isLiked}
						number={props.itemNumber}
					/>
				)}
			</motion.li>
		</ListItemContext.Provider>
	);
}

export default ListItem;
