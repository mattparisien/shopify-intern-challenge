import React from "react";
import Container from "../Container/Container";
import ConditionalWrapper from "../ConditionalWrapper/ConditionalWrapper";

function Section({ name, children, disableContainer }) {
	return (
		<section className={`Section Section_${name} w-full`}>
			<ConditionalWrapper
				wrapper={children => <Container>{children}</Container>}
				condition={!disableContainer}
			>
				{children}
			</ConditionalWrapper>
		</section>
	);
}

export default Section;
