import React from "react";
import ListItem from "./Components/ListItem";

function List({ items }) {
	const classes =
		"List grid grid-cols-2 gap-10 text-dark w-full items-start justify-start";

	return (
		<ul className={classes}>
			{items && items.map(item => <ListItem key={item.id} {...item} />)}
		</ul>
	);
}

export default List;
