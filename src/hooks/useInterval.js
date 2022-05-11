import { ConstructionOutlined } from "@mui/icons-material";
import { useEffect, useState, useCallback } from "react";

const useInterval = interval => {
	if (!interval) {
		throw new Error("useInterval: must provide interval");
	}

	const [pinger, setPinger] = useState(false);

	const handleInterval = useCallback(() => {
		setPinger(!pinger);
	}, [pinger]);

	useEffect(() => {
		const clock = setInterval(handleInterval, interval);

		return () => clearInterval(clock);
	}, [pinger]);

	return { pinger };
};

export default useInterval;
