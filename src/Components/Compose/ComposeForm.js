import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App/App";
import Form from "../Form/Form";

function ComposeForm() {
	const { setListItems, listItems } = useContext(GlobalContext);
	const [prompt, setPrompt] = useState(null);
	const [response, setResponse] = useState(null);

	const inputMap = [
		{
			component: "textarea",
			placeholder: "Ask anything",
			name: "prompt",
		},
	];

	const handleSubmit = (values, onSuccessCallback, onFailureCallback) => {
		const getData = async prompt => {
			const body = {
				temperature: 0.5,
				max_tokens: 100,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
				prompt: values.prompt,
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

				onSuccessCallback();
				setPrompt(values.prompt);
				setResponse(resp.data);
			} catch (err) {
				onFailureCallback(err);
			}
		};

		getData(prompt);
	};

	useEffect(() => {
		if (response) {
			setListItems(prevState => [
				{
					id: response.id,
					prompt: prompt,
					response: response.choices[0].text,
					datePosted: new Date(),
					isLiked: false,
				},
				...prevState,
			]);
		}
	}, [response]);

	return (
		<Form
			inputs={inputMap}
			buttonText={"Submit"}
			onSubmit={(values, onSuccess, onFailure) =>
				handleSubmit(values, onSuccess, onFailure)
			}
		/>
	);
}

export default ComposeForm;
