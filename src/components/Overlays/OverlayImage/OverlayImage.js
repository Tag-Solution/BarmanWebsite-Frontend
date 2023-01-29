import React from "react";
import styled from "styled-components";

const OverlayImage = ({ imgSrc, imgAlt, overlayOpacity, isPageHeader }) => {
	return (
		<Wrapper>
			<div className={isPageHeader ? "page-header" : "bg-container"}>
				<img src={imgSrc} alt={imgAlt} />
				<div className="bg-overlay" style={{ opacity: overlayOpacity }}></div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	// === Overlay ===
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

	// === Page Header ===
	.page-header {
		height: 75vh;
		position: relative;
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
	@media (min-width: 480px) {
		.page-header {
			height: 60vh;
		}
	}
	@media (min-width: 768px) {
		.page-header {
			height: 55vh;
		}
	}
	@media (min-width: 1200px) {
		.page-header {
			height: 60vh;
		}
	}
`;
export default OverlayImage;
