import React from "react";
import { motion } from "framer-motion";

function Page({ children, name, innerComponent }) {
	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
		},
		exit: {
			opacity: 0,
			transition: { ease: "easeInOut", duration: 0.8, delay: 0.2 },
		},
	};
	return (
		<motion.div
			className={`Page Page_${name}`}
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			{React.createElement(innerComponent)}
		</motion.div>
	);
}

export default Page;
