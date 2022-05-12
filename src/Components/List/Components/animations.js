const variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.215, 0.61, 0.355, 1],
      duration: 0.4,
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export {variants}