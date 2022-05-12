import React from "react";
import Heading from "../../Heading/Heading";

function About() {
	return (
		<div className='Footer_About flex items-start justify-between pb-40 pt-10 border-t relative'>
			<div className='absolute text-cream top-0 left-0 text-xs pt-3'>
				{" "}
				● About
			</div>

			<p className='text-4xl md:text-5xl indent-60 w-full md:w-3/4 text-left text-cream uppercase'>
				PROMPTIT IS A TINY FRONT-END → APPLICATION BUILT WITH REACT AND
				TAILWINDCSS. THE APP ALLOWS USERS TO ENTER PROMPTS AND RECEIVE
				DIRECT RESPONSES FROM OPENAI'S API ●. NOT FOR PROFESSIONAL USE.
				
			</p>
		</div>
	);
}

export default About;
