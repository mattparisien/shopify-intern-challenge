import React from "react";
import EyeBadge from "./Components/EyeBadge";
import Body from "./Components/Body";
import { useContext } from "react";
import { ListItemContext } from "../../ListItem";

function HoverView() {
	const { prompt, response, isHover  } = useContext(ListItemContext);

	return (
		<div className='HoverView relative h-full w-full'>
			<EyeBadge isEnter={isHover} />
			<Body prompt={prompt} response={response} />
		</div>
	);
}

export default HoverView;
