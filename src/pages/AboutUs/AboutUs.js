import React from "react";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";
import { useAboutUsContext } from "../../context/AboutUsContext";
import { Owner } from "../../pages";

const AboutUs = ({ isSectionOnly }) => {
	console.count("[AboutUs] Times Rendering");

	const { aboutus, aboutus_loading, aboutus_error } = useAboutUsContext();

	/*
	 * Render
	 */
	const {
		subtitle,
		title,
		paragraph1,
		paragraph2,
		ctaTitle,
		ctaInfo,
		pageHeader,
		images,
	} = aboutus;

	if (aboutus_loading) {
		return (
			<div>
				<h2>Loading el GET</h2>
			</div>
		);
	}
	if (aboutus_error) {
		return (
			<div>
				<h2>Error en el GET</h2>
			</div>
		);
	}
	return (
		<>
			<Wrapper>
				{!isSectionOnly && (
					<PageHeader
						imgSrc={pageHeader?.image?.imageUrl}
						imgAlt={pageHeader?.header}
						h2Text={pageHeader?.header}
						h3Text={pageHeader?.title}
						pText={pageHeader?.subtitle}
					></PageHeader>
				)}

				{/* ============= */}
				{/* About Section */}
				{/* ============= */}
				<div className="section">
					<div className="section-center">
						<div className="section-title">
							<span>{subtitle}</span>
							<h2>{title}</h2>
						</div>
						{/* Paragraphs */}
						<div className="paragraph">{paragraph1}</div>
						<div className="divider"></div>
						<div className="paragraph">{paragraph2}</div>
						{/* CTA */}
						<div className="cta-container">
							<h2>{ctaTitle}</h2>
							<p>{ctaInfo}</p>
						</div>

						<div className="divider"></div>

						{/* Images */}
						<div className="img-container">
							<div className="img img-left">
								<img src={images?.[0]?.imageUrl} alt={images?.[0]?.imageName} />
							</div>
							<div className="img img-right">
								<img src={images?.[1]?.imageUrl} alt={images?.[1]?.imageName} />
							</div>
						</div>
					</div>
				</div>
				<div className="division"></div>
			</Wrapper>

			{/* ============= */}
			{/* Owner Section */}
			{/* ============= */}
			<Owner isSectionOnly={true}></Owner>
		</>
	);
};

const Wrapper = styled.main`
	width: 100%;
	height: 100%;
	.divider {
		height: 1.5rem;
	}
	.cta-container {
		margin: 3rem 0rem;
		font-family: var(--FontTitles);
		letter-spacing: 0.15rem;
		text-align: center;
		h2 {
			font-size: 1.5rem;
			font-weight: 300;
			text-transform: uppercase;
			color: var(--ColorGold);
		}
		p {
			font-size: 1.35rem;
			font-weight: 300;
			letter-spacing: 0.05rem;
			margin-top: 0.3rem;
		}
	}
	.img-container {
		margin: 0rem auto;
		height: 22rem;
		display: flex;
		justify-content: space-between;
		.img {
			height: 80%;
		}
		.img img {
			width: 8.2rem;
			height: 90%;
			object-fit: cover;
		}
		.img-right {
			margin-top: auto;
		}
	}
`;
export default AboutUs;
