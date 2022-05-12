import React, { useEffect, useRef } from "react";
import Section from "../Section/Section";
import SplitText from "../Animation/SplitText";
import "./Hero.css";
import Star from "./Star";
import useScroll from "../../hooks/useScroll";

function Hero() {
	const words = [`Prompts ☀`, "for ⏎", "every", "body"];

	return (
		<Section name='hero' disableContainer>
			<div className='hero-content flex flex-col items-center justify-center overflow-hidden md:block relative w-full text-cream '>
				{words.map((word, i) => (
					<h2 key={i} className='hero-word md:absolute sticky z-10'>
						<SplitText enterDelay={2.4 + i / 10}>{word}</SplitText>
					</h2>
				))}
			</div>
		</Section>
	);
}

export default Hero;
