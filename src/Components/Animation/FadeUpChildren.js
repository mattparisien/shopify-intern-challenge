import { motion } from "framer-motion";
import React from "react";
import InView from "./InView";

function FadeUpChildren({ children }) {
	const variants = {
		hidden: {
			opacity: 0,
			y: "100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0], delay: 0.2 },
		},
	};

	return (
		<InView>
			{Array.isArray(children) ? (
				children.map(child => (
					<motion.div
						className='motion-wrap'
						variants={variants}
						animate='visible'
						initial='hidden'
					>
						{child}
					</motion.div>
				))
			) : (
				<motion.div
					className='motion-wrap'
					variants={variants}
					animate='visible'
					initial='hidden'
				>
					{children}
				</motion.div>
			)}
		</InView>
	);
}

export default FadeUpChildren;
