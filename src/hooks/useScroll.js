import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const useScroll = handler => {
	const scroller = useLocomotiveScroll();

	useEffect(() => {
		if (scroller && scroller.scroll) {
			scroller.scroll.on("scroll", handler);
		}
	}, [scroller]);
};

export default useScroll;
