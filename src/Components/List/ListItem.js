import React from "react";
import "./ListItem.css";
import { motion } from "framer-motion";
import ListItemBody from "./ListItemBody";
import ListItemFooter from "./ListItemFooter";

function ListItem({ prompt, response, datePosted }) {
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

	return (
		<motion.li
			className='ListItem relative text-dark flex flex-col justify-center rounded-l text-left bg-cream pt-8 pb-4 px-5 w-full mb-10 shadow-custom'
			variants={variants}
			initial='hidden'
			animate={"visible"}
		>
			<ListItemBody prompt={prompt} response={response} />
			<ListItemFooter datePosted={datePosted} />
		</motion.li>
	);
}

export default ListItem;
