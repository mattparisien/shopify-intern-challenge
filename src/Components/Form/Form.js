import React, { useEffect, useState } from "react";
import FormButtons from "./FormButtons";
import FormError from "./FormError";
import Input from "./Input";
import TextArea from "./TextArea";

function Form({
	inputs,
	onSubmit,
	onChange,
	className,
	buttonText,
	disableButton,
}) {
	const components = {
		textarea: TextArea,
		input: Input,
	};

	const [value, setValue] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);

		//If fields are empty
		if (Object.values(value).filter(val => val === "").length) {
			setError("Please fill out the field");
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

	const handleClearClick = () => {
		const stateClone = Object.assign({}, value);

		Object.keys(value).forEach(key => (stateClone[key] = ""));

		setValue(stateClone);
	};

	useEffect(() => {
		const defaultState = {};

		inputs.forEach(input => (defaultState[input.name] = ""));
		setValue(defaultState);
	}, [inputs]);

	const handleChange = (event, inputName) => {
		const currVal = event.target.value;
		setValue(prevState => ({ ...prevState, [inputName]: currVal }));

		if (onChange) {
			onChange(event, value);
		}

		setError(null);
	};

	return (
		<div className={`Form w-full md:w-2/4 ${className || ""}`}>
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
				{!disableButton && (
					<FormButtons
						buttonText={buttonText}
						loading={loading}
						onClearClick={handleClearClick}
					/>
				)}
			</form>
		</div>
	);
}

export default Form;
