import React from "react";
import { Link } from "react-router-dom";

import { OverlayImage } from "../../components/OverlayImage";

import ErrorImg from "../../assets/ErrorImg.jpg";
import OverlayText from "../../components/OverlayText/OverlayText";

const Error = () => {
	return (
		<div>
			<OverlayImage
				imgSrc={ErrorImg}
				imgAlt="Page Not Found"
				overlayOpacity={0.35}
			></OverlayImage>
			<OverlayText
				h1Text="404"
				h2Text="Page Not Found"
				redirectLink
				redirectText="Return to Homepage"
				redirectPath="/"
			></OverlayText>
			<Link to="/">Volver al Home</Link>
		</div>
	);
};

export default Error;
