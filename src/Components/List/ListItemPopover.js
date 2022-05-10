import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { GlobalContext } from "../App/App";

function ListItemPopover({ listItemId }) {
	const { ACTIONS } = useContext(GlobalContext);

	const options = [
		{
			title: "Edit",
			icon: EditIcon,
			action: "edit",
		},
		{
			title: "Like",
			icon: FavoriteIcon,
			action: "like",
		},
		{
			title: "Delete",
			icon: DeleteIcon,
			action: "delete",
		},
	];

	const handleClick = action => {
		const currentAction = ACTIONS[action];
		currentAction(listItemId);
	};

	return (
		<div
			className={`ListItemPopover bg-cream absolute right-4 w-32 top-12 rounded-lg shadow-lg border`}
		>
			<ul>
				{options.map((option, i) => (
					<li key={i} className={`text-left`}>
						<button
							onClick={() => handleClick(option.action)}
							className={`w-full flex justify-between  py-4 pr-2 text-left hover:bg-dark hover:text-cream transition ease duration-300 text-dark  pl-4 hover:bg-dark`}
						>
							<span>{option.title}</span>
							<span>
								{React.createElement(option.icon, {
									sx: { width: "1.3rem" },
								})}
							</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListItemPopover;
