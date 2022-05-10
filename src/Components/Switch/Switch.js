import React from "react";

function Switch({ test, children }) {
	return children.find(child => {
		return child.props.value === test;
	});
}

export default Switch;
