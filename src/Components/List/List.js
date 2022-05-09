import React from "react";
import ListItem from "./ListItem";
import { useContext } from "react";
import { GlobalContext } from "../App/App";
import { Global } from "@emotion/react";

function List({ items }) {
	const classes =
		"List  text-dark w-full h-full flex flex-col items-start justify-start";

	return (
		<ul className={classes}>
			{items && items.map(item => <ListItem key={item.id} {...item} />)}
		</ul>
	);
}

export default List;
