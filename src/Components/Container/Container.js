import React from "react";
import { Container as MuiContainer } from "@mui/material";

function Container({ children }) {
	return (
		<MuiContainer
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{children}
		</MuiContainer>
	);
}

export default Container;