import React, { useMemo } from "react";
import moment from "moment";
import SocialList from "./SocialList";

function ListItemFooter({ datePosted }) {
	const date = useMemo(() => {
		if (datePosted) {
			return moment(datePosted).format("DD/MM/YYYY");
		}
	}, [datePosted]);

	return (
		<footer className='ListItemFooter border-t mt-5 flex justify-between items-center'>
			<span className='time text-neutral-400 block pt-4 text-sm'>
				Posted on {date}
			</span>
			{/* <SocialList/> */}
		</footer>
	);
}

export default ListItemFooter;
