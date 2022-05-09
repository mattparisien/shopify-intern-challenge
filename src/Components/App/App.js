import "./App.css";
import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import axios from "axios";

function App() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const body = {};
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
	}, []);

	return <div className='App bg-cream'></div>;
}

export default App;
