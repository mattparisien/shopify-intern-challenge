import React from "react";
import Section from "../Section/Section";
import SplitText from "../SplitText/SplitText";
import "./Hero.css";

function Hero() {
	const words = ["Prompts", "for", "every", "body"];

	return (
		<Section name='hero' disableContainer>
			<div className='hero-content relative h-screen bg-blue-800 w-full text-cream pt-20'>
				{words.map((word, i) => (
					<h2 key={i} className='hero-word'>
						<SplitText enterDelay={2.3}>{word}</SplitText>
					</h2>
				))}
			</div>
			<span className='hero-cta absolute bottom-0 right-0 text-white pr-10 pb-8'>
				Scroll
			</span>
		</Section>
	);
}

export default Hero;
