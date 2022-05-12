import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../App/App";
import { ListItemContext } from "../../../ListItem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

function Actions({ id, isLiked }) {
	const { ACTIONS } = useContext(GlobalContext);

	const options = [
		{
			icon: FavoriteIcon,
			action: !isLiked ? "like" : "unlike",
		},
		{
			icon: DeleteIcon,
			action: "delete",
		},
	];

	const handleClick = action => {
		const currentAction = ACTIONS[action];
		currentAction(id);
	};

	return (
		<div className='HoverView_Actions absolute bottom-0 right-0'>
			<ul className='inline'>
				{options.map((option, i) => (
					<li key={i} className={`text-left`}>
						<button
							onClick={() => handleClick(option.action)}
							className={`flex justify-between py-4 pr-2 text-left hover:opacity-50 transition ease duration-300 text-dark pl-4 `}
						>
							<span>
								{React.createElement(option.icon, {
									sx: { width: "1.3rem" },
									className: option.action === "unlike" ? "text-red-400" : "",
								})}
							</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Actions;
