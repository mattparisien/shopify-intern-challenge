import React from "react";
import TextArea from "./TextArea";
import Button from "../Button/Button";

function Form({ inputs, onSubmit, className, buttonText }) {
	const components = {
		textarea: TextArea,
	};

	return (
		<div className={`Form ${className && className}`}>
			<form className='form w-full' onSubmit={onSubmit}>
				{inputs.map((input, i) =>
					React.createElement(components[input.component], {
						key: i,
						placeholder: input.placeholder,
						name: input.name,
						value: input.value,
					})
				)}
				{/* <div className='cta-wrapper w-full flex md:justify-end'>
					<Button type='submit' isLoading={loading}>
						Submit prompt
					</Button>
				</div> */}
			</form>
		</div>
	);
}

export default Form;
