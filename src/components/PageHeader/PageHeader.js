import React from "react";
import styled from "styled-components";

import { OverlayImage, OverlayText } from "../Overlays";

const PageHeader = ({ imgSrc, imgAlt, h2Text, h3Text, pText }) => {
	return (
		<Wrapper>
			<OverlayImage
				imgSrc={imgSrc}
				imgAlt={imgAlt}
				overlayOpacity={0.57}
				isPageHeader
			></OverlayImage>
			<OverlayText
				h2Text={h2Text}
				h3Text={h3Text}
				pText={pText}
				isPageHeader
			></OverlayText>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 75vh;
`;

export default PageHeader;
