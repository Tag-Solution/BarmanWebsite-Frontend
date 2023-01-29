import React from "react";
import styled from "styled-components";

import PreloaderImg from "../../assets/PreloaderImg.jpg";

import useWindowDimensions from "../../components/Utils/useWindowDimensions";

import { OverlayImage } from "../../components/OverlayImage";
import { OverlayText } from "../../components/OverlayText";

const Preloader = () => {
	const { width, height } = useWindowDimensions();

	return (
		<Wrapper>
			<div
				style={{
					width: width,
					height: height,
				}}
			>
				<OverlayImage
					imgSrc={PreloaderImg}
					imgAlt="Loading Website"
					overlayOpacity={0.45}
				></OverlayImage>
				<OverlayText
					h2Text="Loading Website!"
					h3Text="Please wait..."
				></OverlayText>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	overflow: hidden;
	position: relative;
`;
export default Preloader;
