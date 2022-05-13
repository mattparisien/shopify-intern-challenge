import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ListItem from "./ListItem";

afterEach(cleanup);

describe("ListItem", () => {
	it("renders without crashing", () => {
		render(<ListItem itemNumber={1} />);
	});

	it("renders its DefaultView component by default", () => {
		const { getByTestId } = render(<ListItem itemNumber={1} />);
		const defaultView = getByTestId("default");

		expect(defaultView).toBeInTheDocument();
	});
});
