import { useState, useEffect } from "react";
import axios from "axios";

const useSubmit = body => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (body.prompt) {
			const getData = async () => {
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
					setData(resp.data);
				} catch (err) {
					setLoading(false);
					setError(err);
				}
			};

			getData();
		}
	}, [body]);

	return { data, loading, error };
};

export default useSubmit;
