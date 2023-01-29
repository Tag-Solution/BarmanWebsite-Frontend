import React from "react";
import styled from "styled-components";

const OverlayImage = ({ imgSrc, imgAlt, overlayOpacity }) => {
	return (
		<Wrapper>
			<div className="bg-container">
				<img src={imgSrc} alt={imgAlt} />
				<div className="bg-overlay" style={{ opacity: overlayOpacity }}></div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.bg-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--ColorBlack-85);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
		}
		.bg-overlay {
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
		}
	}
`;
export default OverlayImage;
