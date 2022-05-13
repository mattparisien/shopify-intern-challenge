import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Form from "./Form";

afterEach(cleanup);

describe("Form", () => {
	it("initially renders an empty field", () => {
		const inputMap = [
			{
				component: "textarea",
				placeholder: "Ask anything",
				name: "prompt",
			},
		];
		const { getByPlaceholderText } = render(<Form inputs={inputMap} />);
		expect(getByPlaceholderText("Ask anything")).toBeInTheDocument();
	});

	it("does not call onSubmit if the field(s) is empty", () => {
		const inputMap = [
			{
				component: "textarea",
				placeholder: "Ask anything",
				name: "prompt",
			},
		];

		const handleSubmit = jest.fn();

		const { getByText } = render(
			<Form inputs={inputMap} buttonText='Submit' onSubmit={handleSubmit} />
		);
		const submitButton = getByText("Submit").closest("button");
		fireEvent.click(submitButton);
		expect(handleSubmit).toHaveBeenCalledTimes(0);
	});

	it("calls onSubmit if the fields are filled out", () => {
		const inputMap = [
			{
				component: "textarea",
				placeholder: "Ask anything",
				name: "prompt",
			},
		];

		const handleSubmit = jest.fn();

		const { getByText, getByPlaceholderText } = render(
			<Form inputs={inputMap} buttonText='Submit' onSubmit={handleSubmit} />
		);
		const textArea = getByPlaceholderText("Ask anything");
		const submitButton = getByText("Submit").closest("button");

		fireEvent.change(textArea, { target: { value: "This is a test" } });
		fireEvent.click(submitButton);
		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});

	it("clears the input field when the clear button is clicked", () => {
		const inputMap = [
			{
				component: "textarea",
				placeholder: "Ask anything",
				name: "prompt",
			},
		];

		const { getByText, getByPlaceholderText } = render(
			<Form inputs={inputMap} buttonText='Submit' />
		);
		const textArea = getByPlaceholderText("Ask anything");
		const clearButton = getByText("Clear").closest("button");

		fireEvent.change(textArea, { target: { value: "This is a test" } });
		fireEvent.click(clearButton);
		expect(textArea).toHaveValue("");
	});
});
