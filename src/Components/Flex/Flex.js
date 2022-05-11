import React from "react";
import classNames from "classnames";

function Flex({
	direction,
	containerWidth,
	breakOnMobile,
	justifyContent,
	alignItems,
	children,
	py,
	pl,
	pr,
	position,
	extraClasses,
}) {
	const classes = classNames(`FlexWrapper flex`, {
		[`${breakOnMobile && "md:"}flex-row`]: direction === "row",
		[`${breakOnMobile && "md:"}flex-col`]: direction === "col",
		[`w-${containerWidth}`]: containerWidth,
		[`${direction === "row" ? "flex-col" : "flex-row"}`]: breakOnMobile,
		[`justify-${justifyContent}`]: justifyContent,
		[`items-${alignItems}`]: alignItems,
		[`py-${py}`]: py,
		[`pl-${pl}`]: pl,
		[`pr-${pr}`]: pr,
		[`position-${position}`]: position,
		[`${extraClasses}`]: extraClasses,
	});

	return <div className={classes}>{children}</div>;
}

export default Flex;
