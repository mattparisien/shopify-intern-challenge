import React from "react";
import Form from "../Form/Form";

function SearchBar() {
	const inputMap = [
		{
			component: "input",
			placeholder: "Search for anything",
			name: "search",
		},
	];

	const handleSubmit = () => {};

	return (
		<Form
			inputs={inputMap}
			onSubmit={handleSubmit}
			buttonText={"Search"}
			disableButton
		/>
	);
}

export default SearchBar;
