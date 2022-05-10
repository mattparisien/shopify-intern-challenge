import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import { AnimatePresence } from "framer-motion";

function Routes() {
	const routesMap = [
		{
			title: "Home",
			path: "/",
			component: HomePage,
		},
		{
			title: "About",
			path: "/about",
			component: AboutPage,
		},
	];

	return (
		<AnimatePresence exitBeforeEnter>
			<ReactRoutes>
				{routesMap.map((route, i) => (
					<Route
						key={i}
						element={React.createElement(route.component)}
						path={route.path}
					/>
				))}
			</ReactRoutes>
		</AnimatePresence>
	);
}

export default Routes;
