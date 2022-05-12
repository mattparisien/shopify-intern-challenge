import React from "react";
import PostedAt from "./Components/PostedAt";
import LikedBadge from "./Components/LikedBadge";

function DefaultView({ postedAt, isLiked }) {
	return (
		<div className='DefaultView h-full relative'>
			<div className='card-inner h-full flex flex-col justify-between '>
				<h2 className='text-9xl'>Ppt #1</h2>
				<div className='band-bottom text-neutral-100 text-sm w-full flex items-end justify-between'>
					<PostedAt postedAt={postedAt} />
					<span className='arrow'>→</span>
				</div>
			</div>
			{isLiked && <LikedBadge/>}
		</div>
	);
}

export default DefaultView;
