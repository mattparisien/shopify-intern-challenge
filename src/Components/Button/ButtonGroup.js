import React from "react";

function ButtonGroup({ children }) {
	return (
		<div className='ButtonGroup flex items-center'>
			{children.map((child, i) => (
				<div className={`button-wrapper ${i !== 0 && 'ml-3'}`} key={i}>
					{child}
				</div>
			))}
		</div>
	);
}

export default ButtonGroup;
