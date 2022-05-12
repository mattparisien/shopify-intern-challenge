import React from "react";

function ButtonGroup({ children }) {
	return (
		<div className='ButtonGroup flex flex-col md:flex-row items-center'>
			{children.map((child, i) => (
				<div className='button-wrapper' key={i}>
					{child}
				</div>
			))}
		</div>
	);
}

export default ButtonGroup;
