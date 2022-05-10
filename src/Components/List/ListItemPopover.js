import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

function ListItemPopover() {
	const options = [
		{
			title: "Edit",
			icon: EditIcon,
		},
		{
			title: "Like",
			icon: FavoriteIcon,
		},
		{
			title: "Delete",
			icon: DeleteIcon,
		},
	];

	return (
		<div
			className={`ListItemPopover bg-cream absolute right-4 w-32 top-12 rounded-lg shadow-lg border`}
		>
			<ul>
				{options.map((option, i) => (
					<li key={i} className={`text-left`}>
						<button
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
