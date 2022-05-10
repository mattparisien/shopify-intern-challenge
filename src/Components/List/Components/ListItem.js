import { motion } from "framer-motion";
import React, { createContext, useState } from "react";
import "./ListItem.css";
import ListItemFooter from "./ListItemFooter";
import ListItemPopover from "./ListItemPopover";
import MoreButton from "./MoreButton";
import ListItemBody from "./ListItemBody";

export const ListItemContext = createContext();

function ListItem({ id, prompt, response, datePosted, isLiked }) {
	const [popoverActive, setPopoverActive] = useState(false);
	const [currentView, setCurrentView] = useState("STATIC");

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

	const handleViewToggle = () => {
		const oppositeView = currentView === "STATIC" ? "EDIT" : "STATIC";

		setCurrentView(oppositeView);
	};

	return (
		<ListItemContext.Provider
			value={{ id, prompt, response, datePosted, isLiked }}
		>
			<motion.li
				className='ListItem relative text-dark flex flex-col justify-center rounded-l text-left bg-cream pt-8 pb-4 px-5 w-full mb-10 shadow-custom'
				variants={variants}
				initial='hidden'
				animate={"visible"}
			>
				<ListItemBody />
				<ListItemFooter datePosted={datePosted} isLiked={isLiked} />
				<MoreButton togglePopover={() => setPopoverActive(!popoverActive)} />
				{popoverActive && (
					<ListItemPopover
						listItemId={id}
						isLiked={isLiked}
						toggleSelf={() => setPopoverActive(!popoverActive)}
					/>
				)}
			</motion.li>
		</ListItemContext.Provider>
	);
}

export default ListItem;
