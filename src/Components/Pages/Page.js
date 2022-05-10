import React from "react";
import { motion } from "framer-motion";

function Page({ children, name }) {
	return <motion.div className={`Page Page_${name}`}>{children}</motion.div>;
}

export default Page;
