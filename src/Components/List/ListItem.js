import React from "react";
import "./ListItem.css";
import { motion } from "framer-motion";

function ListItem({ prompt, response }) {
	const variants = {
		hidden: {
			opacity: 0,
			y: "100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.86, 0, 0.07, 0.995],
				duration: 0.4,
			},
		},
	};

	return (
		<motion.li
			className='ListItem text-dark flex flex-col justify-center rounded-l text-left bg-cream p-5 w-full mb-10 shadow-custom'
			variants={variants}
			initial='hidden'
			animate='visible'
		>
			<h5>{prompt}</h5>
			<h5>{response}</h5>
		</motion.li>
	);
}

export default ListItem;
