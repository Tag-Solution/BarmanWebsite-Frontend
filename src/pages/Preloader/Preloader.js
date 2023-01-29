import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PreloaderImg from "../../assets/PreloaderImg.jpg";

const Preloader = () => {
	/*
	 * isFullScreen
	 */
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);
	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
	console.log(windowDimensions);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Wrapper
			style={{
				width: windowDimensions.width + "px",
				height: windowDimensions.height + "px",
			}}
		>
			{/* Background Image */}
			<div className="home-bg">
				<img src={PreloaderImg} alt="Loading site, please wait." />
				<div className="home-bg-overlay"></div>
			</div>

			<div className="text-container">
				<h2>Loading Site...</h2>
				<h3>Please Wait!</h3>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.home-bg {
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
		.home-bg-overlay {
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.7);
		}
	}
	.text-container {
		z-index: 2;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: var(--FontTitles);
		font-size: 1.2rem;
		font-weight: 300;
		color: var(--ColorWhite);
		letter-spacing: 0.17rem;
		line-height: 3rem;
		display: grid;
		place-items: center;
	}
	@media (min-width: 992px) {
		.text-container {
			font-size: 1.6rem;
			line-height: 4.7rem;
		}
	}
`;
export default Preloader;
