import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import ListItem from "./ListItem";
import HoverView from "./Views/Hover/HoverView";
import DefaultView from "./Views/Default/DefaultView";
import { GlobalContext } from "../../App/App";
import { ListItemContext } from "./ListItem";

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

	it("displays the correct itemNumber", () => {
		const { getByText } = render(<ListItem itemNumber={4} />);

		expect(getByText("Ppt 04")).toBeInTheDocument();
	});

	it("displays a like icon on default state when liked button is clicked", async () => {
		const prompt = "Hello";
		const response = "123";
		const isHover = true;
		const isLiked = false;
		const id = 123;

		const ACTIONS = {
			like: jest.fn(),
		};

		const listItemContextValue = {
			prompt,
			response,
			isHover,
			isLiked,
		};

		const globalContextValue = {
			ACTIONS,
		};

		const { getAllByRole, getByTestId } = render(
			<GlobalContext.Provider value={globalContextValue}>
				<ListItemContext.Provider value={listItemContextValue}>
					<ListItem itemNumber={2} response={"123"} />
					{/* <DefaultView /> */}

					{/* <HoverView /> */}
				</ListItemContext.Provider>
			</GlobalContext.Provider>
		);

		fireEvent.mouseOver(getByTestId("listItem"));
		await waitFor(() => {
			const hoverView = getByTestId("hover");
			const likeButton = getAllByRole("button")[0];
			fireEvent.click(likeButton);
		});

		// const { getByTestId } = render(<DefaultView number={1} />);

		// const likeButton = getAllByRole("button")[0];
		// fireEvent.click(likeButton);
		// await waitFor(() => expect(getByTestId("likedBadge")).toBeInTheDocument());
	});
});
