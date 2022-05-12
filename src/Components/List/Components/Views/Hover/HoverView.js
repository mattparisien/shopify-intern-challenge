import React from "react";
import EyeBadge from "./Components/EyeBadge";
import Body from "./Components/Body";
import Actions from "./Components/Actions";
import { useContext } from "react";
import { ListItemContext } from "../../ListItem";

function HoverView() {
	const { prompt, response, isHover, isLiked, id } =
		useContext(ListItemContext);

	return (
		<div className='HoverView relative h-full w-full'>
			<EyeBadge isEnter={isHover} />
			<Body prompt={prompt} response={response} />
			<Actions id={id} isLiked={isLiked} />
		</div>
	);
}

export default HoverView;
