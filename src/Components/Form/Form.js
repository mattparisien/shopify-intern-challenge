import React, { useEffect, useState } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import Button from "../Button/Button";
import FormError from "./FormError";
import TextArea from "./TextArea";
import Input from "./Input";
import FormButtons from "./FormButtons";

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
		const currVal = event.target.value;
		setValue(prevState => ({ ...prevState, [inputName]: currVal }));

		if (onChange) {
			onChange(event, value);
		}

		setError(null);
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
				{!disableButton && (
					<FormButtons buttonText={buttonText} loading={loading} />
				)}
			</form>
		</div>
	);
}

export default Form;
