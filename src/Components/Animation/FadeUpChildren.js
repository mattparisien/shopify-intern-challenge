import { motion } from "framer-motion";
import React from "react";
import useInView from "../../hooks/useInView";

function FadeUpChildren({ children }) {
	const { ref, inView } = useInView();

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
		<div className='view-wrapper' ref={ref}>
			{Array.isArray(children) ? (
				children.map((child, i) => (
					<motion.div
						key={i}
						className='motion-wrap'
						variants={variants}
						animate={inView && "visible"}
						initial='hidden'
					>
						{child}
					</motion.div>
				))
			) : (
				<motion.div
					className='motion-wrap'
					variants={variants}
					animate={inView && "visible"}
					initial='hidden'
				>
					{children}
				</motion.div>
			)}
		</div>
	);
}

export default FadeUpChildren;
