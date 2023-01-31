import React from "react";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const Owner = ({ isSectionOnly }) => {
	return (
		<Wrapper>
			{!isSectionOnly && (
				<PageHeader
					imgSrc={AboutUsBG}
					imgAlt={"Owner Page"}
					h2Text={"Owner"}
					h3Text={"Kevin Maurin"}
					pText={"Mixologist"}
				></PageHeader>
			)}

			{/* ============= */}
			{/* Owner Section */}
			{/* ============= */}
			<h2></h2>
			<div className="section-dark">
				<div className="section-center">
					<div className="img-container">
						<img src={AboutUsBG} alt="Owner Page" />
					</div>
					<div className="info-container">
						<h3>20 Years of Experience</h3>
						<h2>Kevin Maurin</h2>
						<p className="paragraph-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum
							vitae culpa veritatis, eos accusamus alias modi eaque temporibus
							sit at iste, voluptas dicta excepturi! Vitae exercitationem
							molestias eligendi rerum.
						</p>
						<div className="signature-container">
							<h3>Kevin Maurin</h3>
							<h2>Mixologist</h2>
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
		height: 100%;
		img {
			width: 100%;
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
