import React from "react";
import ButtonGroup from "../Button/ButtonGroup";
import Button from "../Button/Button";

function FormButtons({ loading, buttonText, onClearClick }) {
	return (
		<div className='FormButtons w-full flex justify-end items-center mt-3'>
			<ButtonGroup>
				<Button type='submit' variant='outline' isLoading={loading}>
					{buttonText}
				</Button>

				<Button type='button' variant='fill' onClick={onClearClick}>
					Clear
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default FormButtons;
