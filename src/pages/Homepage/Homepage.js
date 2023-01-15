import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import homeBg1 from "../../assets/static/homepage/homepageBg1.jpg";
import { DummyPage } from "../../pages";

const Homepage = (props) => {
	const { isFullScreen } = props;

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

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleFullScreen = (isFullScreen) => {
		if (isFullScreen) {
			return {
				width: windowDimensions.width + "px",
				height: windowDimensions.height + "px",
			};
		}
		return {
			width: "100vw",
			height: "90vh",
		};
	};

	/*
	 * Other
	 */

	return (
		<React.Fragment>
			<Wrapper>
				<div className="home-sect" style={handleFullScreen(isFullScreen)}>
					{/* Background Image */}
					<div className="home-bg">
						<img src={homeBg1} alt="BarmanWebsite" />
						<div className="home-bg-overlay"></div>
					</div>
					{/* Info */}
					<div className="home-info-container">
						<div className="home-info">
							<h4>Desde 1920</h4>
							<h1>Welcome a Barman Website</h1>
							<h2>Bar & Cocktails</h2>
							<p>@instagram.barman</p>
						</div>
						{/* Button */}
						<Link to="/prueba-link-fallido" className="home-btn main-btn">
							Ver Menu!
						</Link>
					</div>
				</div>
			</Wrapper>
			{!isFullScreen && <DummyPage></DummyPage>}
		</React.Fragment>
	);
};

const Wrapper = styled.main`
	.home-sect {
		text-align: center;
		position: relative;
	}
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
			background-color: rgba(0, 0, 0, 0.65);
		}
	}
	.home-info-container {
		z-index: 2;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 13rem;
		.home-info {
			display: grid;
			place-items: center;
			height: 60%;
			color: var(--ColorWhite);
			h4 {
				text-transform: uppercase;
				font-size: 0.7rem;
				font-weight: 200;
				letter-spacing: 0.5rem;
			}
			h1 {
				font-size: 1.5rem;
				font-weight: 600;
				white-space: nowrap;
				letter-spacing: 0.13rem;
			}
			h2 {
				font-size: 1.5rem;
				font-weight: 300;
				letter-spacing: 0.25rem;
				color: var(--ColorGold);
			}
			p {
				font-size: 0.87rem;
				letter-spacing: 0.12rem;
				font-weight: 200;
			}
		}
		.home-btn {
			font-size: 1.5rem;
			font-weight: 200;
			letter-spacing: 2px;
			width: 45vw;
		}
	}
`;

export default Homepage;
