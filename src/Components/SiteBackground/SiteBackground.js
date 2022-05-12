import React, { useRef } from "react";
import Star from "../Hero/Star";
import useScroll from "../../hooks/useScroll";

function SiteBackground() {
	const starRef = useRef(null);
	const darkBgRef = useRef(null);

	const handleScroll = e => {
		//Tween black background opacity on scroll
		darkBgRef.current.style.opacity = e.scroll.y / (window.innerHeight - 400);

		//Rotate star on scroll
		const scrollPos = e.scroll.y / 10;
		starRef.current.style.transform = `rotate(${scrollPos}deg)`;
	};
	useScroll(handleScroll);

	return (
		<>
			<div
				className='SiteBackground fixed top-0 left-0 w-screen h-screen pointer-events-none'
				style={{ zIndex: -1 }}
			>
				<div
					className='bg-dark w-full h-full absolute top-0 left-0 z-50'
					ref={darkBgRef}
				></div>
				<div className='bg-blue-custom w-full h-full relative'>
					<Star ref={starRef} />
				</div>
			</div>
		</>
	);
}

export default SiteBackground;
