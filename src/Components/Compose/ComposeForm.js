import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App/App";
import Button from "../Button/Button";
import FormError from "../Form/FormError";

function ComposeForm() {
	const { setListItems, listItems } = useContext(GlobalContext);
	const [value, setValue] = useState("");
	const [prompt, setPrompt] = useState(null);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (prompt) {
			const getData = async () => {
				const body = {
					temperature: 0.5,
					max_tokens: 64,
					top_p: 1.0,
					frequency_penalty: 0.0,
					presence_penalty: 0.0,
					prompt: prompt,
				};

				try {
					const resp = await axios.post(
						process.env.REACT_APP_OPENAPI_BASEURL,
						body,
						{
							headers: {
								Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
							},
						}
					);

					setLoading(false);
					setResponse(resp.data);
				} catch (err) {
					setLoading(false);
					setError(err);
				}
			};

			getData();
		}
	}, [prompt]);

	useEffect(() => {
		if (response && !listItems.includes(response)) {
			setListItems(prevState => [
				{
					id: response.id,
					prompt: prompt,
					response: response.choices[0].text,
					datePosted: new Date(),
				},
				...prevState,
			]);

			setValue("");
		} else if (response && listItems.includes(response)) {
			setError("You already submitted this prompt");
		}
	}, [response, prompt]);

	const handleSubmit = e => {
		e.preventDefault();

		const text = value;

		if (!text || text === "") {
			setError("Field cannot be empty");
			return;
		}

		setPrompt(text);
		setResponse(null);
		setLoading(true);
	};

	const handleChange = e => {
		setError(null);
		setValue(e.target.value);
	};

	return (
		<div className='ComposeForm w-full flex-1  text-dark rounded-lg pr-4 py-4'>
			<form className='form w-full' onSubmit={handleSubmit}>
				<textarea
					className='text-dark bg-transparent border-b rounded-l w-full'
					placeholder={"I love bagels"}
					name='prompt'
					value={value}
					onChange={handleChange}
					autoFocus={true}
					style={{ resize: "none" }}
				></textarea>
				<FormError error={error} />
				<div className='cta-wrapper w-full flex md:justify-end'>
					<Button type='submit' isLoading={loading}>
						Submit prompt
					</Button>
				</div>
			</form>
		</div>
	);
}

export default ComposeForm;
