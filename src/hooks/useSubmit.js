import { useState, useEffect } from "react";

const useSubmit = submitFunction => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async () => {
		try {
			setLoading(true);
			setError(null);
			await submitFunction();
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return { handleSubmit, loading, error };
};

export default useSubmit;
