import React from "react";
import styled from "styled-components";

import { useHomepageContext } from "../../context/HomepageContext";

import { OverlayImage } from "../../components/Overlays";

import { AboutUs, Preloader } from "../../pages";
import { MainButton } from "../../components/Buttons";

const Homepage = () => {
	const { homepage, homepage_loading, homepage_error } = useHomepageContext();

	/*
	 * Render
	 */
	const { miniTitle, title, subtitle, text, button, images } = homepage;

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
				<div className="home-sect" style={{ width: "100%", height: "95vh" }}>
					{/* Background Image */}
					<OverlayImage
						imgSrc={images?.[0]?.imageUrl}
						imgAlt={images?.[0]?.imageName}
						overlayOpacity={0.6}
					></OverlayImage>
					{/* Info */}
					<div className="home-info-container">
						<div className="home-info">
							<h4>{miniTitle}</h4>
							<h1>{title}</h1>
							<h2>{subtitle}</h2>
							<p>{text}</p>
						</div>
						{/* Button */}
						<MainButton
							isLinkBtn
							linkPath={button?.buttonUrl}
							btnText={button?.buttonTitle}
							classNames="gold-white-transparent-btn"
						></MainButton>
					</div>
				</div>
			</Wrapper>
			{/* ============= */}
			{/* Otras Sections */}
			{/* ============= */}
			<AboutUs isSectionOnly={true}></AboutUs>
		</>
	);
};

const Wrapper = styled.main`
	overflow: hidden;
	.home-sect {
		text-align: center;
		position: relative;
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
		}
	}
`;

export default Homepage;
