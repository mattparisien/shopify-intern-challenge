import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import useSubmit from "../../hooks/useSubmit";
import axios from "axios";
import "./Form.css";

function Form({ setListItems }) {
	const [prompt, setPrompt] = useState(null);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (prompt && !loading) {
			setLoading(true);

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
		if (response) {
			setListItems(prevState => [
				...prevState,
				{
					id: response.id,
					prompt: prompt,
					response: response.choices[0].text,
				},
			]);
		}
	}, [response, prompt]);

	const handleSubmit = e => {
		e.preventDefault();
		const text = e.target[0].value;
		console.log(text);
		setPrompt(text);
	};

	const classes = "Form w-2/6";

	return (
		<form className={classes} onSubmit={handleSubmit}>
			<div className='form-group'>
				<input className='text-white bg-transparent border rounded-l h-20 w-full'></input>
			</div>
			<Button type='submit'>Submit prompt</Button>
		</form>
	);
}

export default Form;
