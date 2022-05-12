import React, { useMemo } from "react";
import useInterval from "../../../../../../hooks/useInterval";
import moment from "moment";

function PostedAt({ postedAt }) {
	const { pinger } = useInterval(60000);

	const time = useMemo(() => {
		if (postedAt) {
			return moment(postedAt).fromNow();
		}
	}, [postedAt, pinger]);

	return <span className='DefaultView_PostedAt text-sm w-2/6 text-neutral-400'>You asked this question {time}</span>;
}

export default PostedAt;
