import React, { useEffect, useRef } from "react";
import Section from "../Section/Section";
import SplitText from "../Animation/SplitText";
import "./Hero.css";
import Star from "./Star";
import useScroll from "../../hooks/useScroll";

function Hero() {
	const words = [`Prompts ☀`, "for ⏎", "every", "body"];
	const ref = useRef(null);

	const handleScroll = e => {
		const scrollPos = e.scroll.y / 10;

		ref.current.style.transform = `rotate(${scrollPos}deg)`;
	};
	useScroll(handleScroll);

	return (
		<Section name='hero' disableContainer>
			<div className='hero-content flex flex-col items-center justify-center overflow-hidden md:block relative bg-blue-800 w-full text-cream '>
				{words.map((word, i) => (
					<h2 key={i} className='hero-word md:absolute sticky z-10'>
						<SplitText enterDelay={2.4 + i / 10}>{word}</SplitText>
					</h2>
				))}
				<Star ref={ref} />
			</div>
			<span className='hero-cta absolute left-1/2 -translate-x-2/4 md:translate-x-0 md:left-0 bottom-0 text-white text-2xl md:pl-10 pb-8'>
				Scroll
			</span>
		</Section>
	);
}

export default Hero;
