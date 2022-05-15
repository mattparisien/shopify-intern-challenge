import React from "react";
import {
	render,
	cleanup,
	fireEvent,
	waitFor,
	waitForElementToBeRemoved,
} from "@testing-library/react";
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

	it("displays the hover view on mouse enter and removes default view", async () => {
		const prompt = "Hello";
		const response = "123";
		const isHover = true;
		const isLiked = false;

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

		const { getByTestId, queryByText } = render(
			<GlobalContext.Provider value={globalContextValue}>
				<ListItemContext.Provider value={listItemContextValue}>
					<ListItem itemNumber={2} response={"123"} />
				</ListItemContext.Provider>
			</GlobalContext.Provider>
		);

		fireEvent.mouseOver(getByTestId("listItem"));

		await waitFor(() => {
			expect(getByTestId("hover")).toBeInTheDocument();
			expect(queryByText("Ppt 02")).not.toBeInTheDocument();
		});
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
				</ListItemContext.Provider>
			</GlobalContext.Provider>
		);

		fireEvent.mouseOver(getByTestId("listItem"));

		await waitFor(() => {
			const likeButton = getAllByRole("button")[0];
			fireEvent.click(likeButton);
			fireEvent.mouseOut(getByTestId("listItem"));
		});
		await waitFor(() => {
			expect(getByTestId("default")).toBeInTheDocument();
		});

		// const { getByTestId } = render(<DefaultView number={1} />);

		// const likeButton = getAllByRole("button")[0];
		// fireEvent.click(likeButton);
		// await waitFor(() => expect(getByTestId("likedBadge")).toBeInTheDocument());
	});
});
