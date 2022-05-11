import React from "react";
import ListItem from "./Components/ListItem";

function List({ items }) {
	const classes =
		"List text-dark w-full flex flex-col items-start justify-start";

	return (
		<ul className={classes}>
			{items && items.map(item => <ListItem key={item.id} {...item} />)}
		</ul>
	);
}

export default List;
