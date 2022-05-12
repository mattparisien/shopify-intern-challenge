import React from "react";
import EyeBadge from "../../EyeBadge";
import ListItemBody from "./Components/ListItemBody";

function HoverView() {
	return (
		<div className='HoverView relative h-full w-full'>
			<EyeBadge />
			<ListItemBody />
			{/* <ListItemFooter datePosted={datePosted} isLiked={isLiked} />
			<MoreButton togglePopover={() => setPopoverActive(!popoverActive)} />
			{popoverActive && (
				<ListItemPopover
					listItemId={id}
					isLiked={isLiked}
					toggleSelf={() => setPopoverActive(!popoverActive)}
				/>
			)} */}
		</div>
	);
}

export default HoverView;
