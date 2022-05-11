import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import FormError from "./FormError";
import TextArea from "./TextArea";

function Form({ inputs, onSubmit, className, buttonText }) {
	const components = {
		textarea: TextArea,
	};

	const [value, setValue] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);

		//If fields are empty
		if (Object.values(value).filter(val => val === "").length) {
			setError("Fields cannot be empty");
			setLoading(false);
			return;
		}

		//Continue
		onSubmit(
			value,
			() => setLoading(false),
			err => {
				setError(err);
				setLoading(false);
				setValue("");
			}
		);
	};

	useEffect(() => {
		const defaultState = {};

		inputs.forEach(input => (defaultState[input.name] = ""));
		setValue(defaultState);
	}, [inputs]);

	const handleChange = (event, inputName) => {
		setError(null);
		const currVal = event.target.value;
		setValue(prevState => ({ ...prevState, [inputName]: currVal }));
	};

	return (
		<div className={`Form ${className || ""}`}>
			<form className='form w-full' onSubmit={handleSubmit}>
				{inputs.map((input, i) =>
					React.createElement(components[input.component], {
						key: i,
						placeholder: input.placeholder,
						name: input.name,
						value: value[input.name],
						onChange: e => handleChange(e, input.name),
					})
				)}
				<FormError error={error} />
				<div className='cta-wrapper w-full flex md:justify-end'>
					<Button type='submit' isLoading={loading}>
						{buttonText}
					</Button>
				</div>
			</form>
		</div>
	);
}

export default Form;
