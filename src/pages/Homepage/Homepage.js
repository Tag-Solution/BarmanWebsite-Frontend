import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useHomepageContext } from "../../context/HomepageContext";

import { DummyPage, Preloader } from "../../pages";

const Homepage = (props) => {
	const { isFullScreen } = props;
	const { homepage, homepage_loading, homepage_error } = useHomepageContext();

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
			width: windowDimensions.width + "px",
			height: windowDimensions.height * 0.942 + "px",
		};
	};

	/*
	 * Render
	 */
	const { date, title, subtitle, direction, buttonResponse, imageResponses } =
		homepage;

	if (homepage_loading) {
		return <Preloader></Preloader>;
	}
	if (homepage_error) {
		return (
			<div>
				<h2>Error en el GET</h2>
			</div>
		);
	}
	return (
		<>
			<Wrapper>
				<div className="home-sect" style={handleFullScreen(isFullScreen)}>
					{/* Background Image */}
					<div className="home-bg">
						<img
							src={imageResponses?.[0]?.fileUrl}
							alt={imageResponses?.[0]?.name}
						/>
						<div className="home-bg-overlay"></div>
					</div>
					{/* Info */}
					<div className="home-info-container">
						<div className="home-info">
							<h4>{date}</h4>
							<h1>{title}</h1>
							<h2>{subtitle}</h2>
							<p>{direction}</p>
						</div>
						{/* Button */}
						<Link to={buttonResponse?.url} className="home-btn main-btn">
							{buttonResponse?.title}
						</Link>
					</div>
				</div>
			</Wrapper>
			{!isFullScreen && <DummyPage></DummyPage>}
		</>
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
			background-color: rgba(0, 0, 0, 0.775);
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
		height: 13.5rem;
		.home-info {
			display: grid;
			place-items: center;
			height: 65%;
			color: var(--ColorWhite);
			font-family: var(--FontTitles);
			h4 {
				text-transform: uppercase;
				font-size: 0.7rem;
				font-weight: 100;
				letter-spacing: 0.5rem;
			}
			h1 {
				font-size: 1.9rem;
				font-weight: 400;
				white-space: nowrap;
				letter-spacing: 0.3rem;
			}
			h2 {
				font-size: 1.5rem;
				font-weight: 200;
				white-space: nowrap;
				letter-spacing: 0.2rem;
				color: var(--ColorGold);
			}
			p {
				font-size: 0.8rem;
				letter-spacing: 0.1rem;
				font-weight: 200;
				font-family: var(--FontTexts);
			}
		}
		.home-btn {
			font-size: 1rem;
			font-weight: 200;
			letter-spacing: 0.26rem;
			text-transform: uppercase;
			padding: 0.65rem 2.1rem;
		}
	}

	@media (min-width: 768px) {
		.home-info-container {
			height: 14.5rem;
			.home-info {
				h4 {
					font-size: 0.85rem;
				}
				h1 {
					font-size: 2.1rem;
					letter-spacing: 0.5rem;
				}
				h2 {
					font-size: 1.75rem;
					letter-spacing: 0.3rem;
				}
				p {
					font-size: 0.95rem;
					letter-spacing: 0.2rem;
				}
			}
			.home-btn {
				font-size: 1.1rem;
				letter-spacing: 0.35rem;
			}
		}
	}
	@media (min-width: 992px) {
		.home-info-container {
			height: 18.5rem;
			.home-info {
				h4 {
					font-size: 0.95rem;
				}
				h1 {
					font-size: 2.3rem;
					letter-spacing: 0.5rem;
				}
				h2 {
					font-size: 1.9rem;
					letter-spacing: 0.3rem;
				}
				p {
					font-size: 1.1rem;
					letter-spacing: 0.2rem;
				}
			}
			.home-btn {
				font-size: 1.3rem;
				letter-spacing: 0.35rem;
			}
		}
	}

	@media (min-width: 1024px) {
		.home-info-container {
			height: 17rem;
			.home-info {
				h4 {
					font-size: 0.9rem;
				}
				h1 {
					font-size: 2.5rem;
					letter-spacing: 0.5rem;
				}
				h2 {
					font-size: 1.75rem;
					letter-spacing: 0.3rem;
				}
				p {
					font-size: 0.9rem;
					letter-spacing: 0.2rem;
				}
			}
			.home-btn {
				font-size: 1.3rem;
				letter-spacing: 0.35rem;
			}
		}
	}
`;

export default Homepage;
