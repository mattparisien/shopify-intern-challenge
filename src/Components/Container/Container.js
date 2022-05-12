import React from "react";
import { Container as MuiContainer } from "@mui/material";

function Container({ children, flexDirection }) {
	return (
		<MuiContainer
			maxWidth='lg'
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: flexDirection || "row",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{children}
		</MuiContainer>
	);
}

export default Container;
