function ConditionalWrapper({ condition, wrapper, children, timeout }) {
	return condition ? wrapper(children) : children;
}

export default ConditionalWrapper;
