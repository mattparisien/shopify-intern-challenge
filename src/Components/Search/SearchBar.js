import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../App/App";
import Input from "../Form/Input";

function SearchBar() {
	const { ACTIONS } = useContext(GlobalContext);
	const [value, setValue] = useState("");

	const isDirty = useRef(false);
	const isFirstRender = useRef(true);

	const handleChange = e => {
		if (!isDirty.current) {
			isDirty.current = true;
		}

		setValue(e.target.value);
	};

	useEffect(() => {
		!isFirstRender.current && ACTIONS.setSearch(value);
		isFirstRender.current = false;
	}, [value]);

	return (
		<Input
			placeholder='Search for anything'
			value={value}
			name={"search"}
			onChange={handleChange}
		/>
	);
}

export default SearchBar;
