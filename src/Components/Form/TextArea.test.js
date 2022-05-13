import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TextArea from "./TextArea";

afterEach(cleanup);

it("renders without crashing", () => {
	render(<TextArea placeholder='Ask anything' />);
});

it("calls onChange handler when user inputs information", () => {
	const handleChange = jest.fn();

	const { getByPlaceholderText } = render(
		<TextArea placeholder='Ask anything' onChange={handleChange} />
	);

	const textArea = getByPlaceholderText("Ask anything");

	fireEvent.change(textArea, { target: { value: "1" } });
	fireEvent.change(textArea, { target: { value: "12" } });
	fireEvent.change(textArea, { target: { value: "123" } });
	expect(handleChange).toHaveBeenCalledTimes(3);
	expect(textArea).toHaveValue("123");
});
