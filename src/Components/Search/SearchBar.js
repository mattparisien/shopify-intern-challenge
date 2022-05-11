import React, { useEffect, useState, useContext, useCallback } from "react";
import Form from "../Form/Form";
import { GlobalContext } from "../App/App";
import Input from "../Form/Input";

function SearchBar() {
	const { ACTIONS } = useContext(GlobalContext);
	const [value, setValue] = useState("");

	const handleChange = e => {
		setValue(e.target.value);
	};

	useEffect(() => {
		value && ACTIONS.setSearch(value);
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
