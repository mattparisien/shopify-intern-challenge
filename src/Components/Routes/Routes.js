import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import { AnimatePresence } from "framer-motion";
import Page from "../Pages/Page";
import { useLocation } from "react-router-dom";

function Routes() {
	const location = useLocation();

	const routesMap = [
		{
			title: "home",
			path: "/",
			component: HomePage,
		},
		{
			title: "about",
			path: "/about",
			component: AboutPage,
		},
	];

	return (
		<AnimatePresence exitBeforeEnter>
			<ReactRoutes location={location} key={location.pathname}>
				{routesMap.map((route, i) => (
					<Route
						element={
							<Page innerComponent={route.component} name={route.title} />
						}
						path={route.path}
						key={location.pathname}
					/>
				))}
			</ReactRoutes>
		</AnimatePresence>
	);
}

export default Routes;
