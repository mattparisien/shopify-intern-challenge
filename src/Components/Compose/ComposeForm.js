import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App/App";
import Button from "../Button/Button";
import "./ComposeForm.css";

function ComposeForm() {
	const { setListItems } = useContext(GlobalContext);
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

		setPrompt(text);
	};

	const classes = "Form w-full";

	return (
		<div className='ComposeForm w-full flex-1  text-dark rounded-lg p-4'>
			<form className={classes} onSubmit={handleSubmit}>
				<input
					className='text-dark bg-transparent border-b rounded-l w-full'
					placeholder={"What are you thinking about?"}
				></input>
				<Button type='submit'>Submit prompt</Button>
			</form>
		</div>
	);
}

export default ComposeForm;
