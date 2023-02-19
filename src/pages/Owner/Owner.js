import React from "react";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";
import { useOwnerContext } from "../../context/OwnerContext";

const Owner = ({ isSectionOnly }) => {
	console.count("[Owner] Times Rendering");

	const { owner, owner_loading, owner_error } = useOwnerContext();

	/*
	 * Render
	 */
	const { subtitle, title, paragraph, name, position, pageHeader, image } =
		owner;

	if (owner_loading) {
		return (
			<div>
				<h2>Loading el GET</h2>
			</div>
		);
	}
	if (owner_error) {
		return (
			<div>
				<h2>Error en el GET</h2>
			</div>
		);
	}
	return (
		<Wrapper>
			{!isSectionOnly && (
				<PageHeader
					imgSrc={pageHeader.image?.imageUrl}
					imgAlt={pageHeader.header}
					h2Text={pageHeader.header}
					h3Text={pageHeader.title}
					pText={pageHeader.subtitle}
				></PageHeader>
			)}

			{/* ============= */}
			{/* Owner Section */}
			{/* ============= */}
			<div className="section-dark">
				<div className="section-center">
					<div className="img-container">
						<img src={image?.imageUrl} alt={image?.imageName} />
					</div>
					<div className="info-container">
						<h3>{subtitle}</h3>
						<h2>{title}</h2>
						<p className="paragraph-white">{paragraph}</p>
						<div className="signature-container">
							<h3>{name}</h3>
							<h2>{position}</h2>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.img-container {
		width: 100%;
		height: 30rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.info-container {
		margin-top: 4rem;
		height: 29.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: var(--FontTitles);
		color: var(--ColorWhite);
		letter-spacing: 0.13rem;
		font-weight: 300;
		h3 {
			font-size: 0.9rem;
			letter-spacing: 0.15rem;
			color: var(--ColorGold);
			text-transform: uppercase;
		}
		h2 {
			font-size: 2rem;
			letter-spacing: 0.2rem;
		}
		.signature-container {
			margin-top: 1rem;
			font-family: var(--FontTitles);
			font-weight: 100;
			text-align: center;
			text-transform: capitalize;
			h3 {
				letter-spacing: 0.5rem;
				color: var(--ColorWhite);
			}
			h2 {
				margin-top: 0.3rem;
				color: var(--ColorGold);
			}
		}
	}
`;

export default Owner;
