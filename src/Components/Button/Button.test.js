import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

it("renders without crashing", () => {
	render(<Button />);
});

it("renders a clickable button", () => {
	const handleClick = jest.fn();

	const { getByText } = render(
		<Button onClick={handleClick}>Clickable</Button>
	);
	const button = getByText("Clickable").closest("button");

	fireEvent.click(button);
	expect(handleClick).toHaveBeenCalledTimes(1);
});

it("renders a button label", () => {
	const { getByText } = render(<Button>Default</Button>);
	expect(getByText("Default")).toBeInTheDocument();
});

it("renders an outline button style", () => {
	const { getByText } = render(<Button variant={"outline"}>Default</Button>);
	expect(getByText("Default").closest("button")).toHaveClass("Button_outline");
});

it("renders a fill button style", () => {
	const { getByText } = render(<Button variant={"fill"}>Default</Button>);
	expect(getByText("Default").closest("button")).toHaveClass("Button_fill");
});
