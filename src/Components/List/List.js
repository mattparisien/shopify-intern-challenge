import React from "react";
import ListItem from "./ListItem";

function List({ items }) {
	const classes = "List  w-full h-full flex flex-col items-start justify-end";

	return (
		<ul className={classes}>
			{items && items.map(item => <ListItem key={item.id} {...item} />)}
		</ul>
	);
}

export default List;
