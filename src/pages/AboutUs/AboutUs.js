import React from "react";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const AboutUs = () => {
	return (
		<Wrapper>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"About Us Page"}
				h2Text={"About Us"}
				h3Text={"Nyu's Bartending"}
				pText={"History"}
			></PageHeader>
			<div className="section">
				<div className="section-center">
					<div className="section-title">
						<span>About Us</span>
						<h2>Nyu's Bartending</h2>
					</div>
					{/* Paragraphs */}
					<div className="paragraphs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						consequuntur praesentium voluptatibus ad exercitationem magnam qui
						modi saepe labore earum nulla ad.
					</div>
					<div className="divider"></div>
					<div className="paragraphs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						consequuntur praesentium voluptatibus ad exercitationem magnam qui
						modi saepe labore earum nulla ad.
					</div>
					{/* CTA */}
					<div className="cta-container">
						<h2>Réservations</h2>
						<p>+41 00 000 00 00</p>
					</div>
					{/* Images */}
					<div className="img-container">
						<div className="img img-left">
							<img src={AboutUsBG} alt="About Images" />
						</div>
						<div className="img img-right">
							<img src={AboutUsBG} alt="About Images" />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 100%;
	.paragraphs {
		margin: 0 auto;
		font-family: var(--FontTexts);
		letter-spacing: 0.12rem;
		font-size: 0.87rem;
		font-weight: 300;
		text-align: left;
	}
	.divider {
		height: 1.5rem;
	}
	.cta-container {
		margin: 2.5rem 0rem;
		font-family: var(--FontTitles);
		letter-spacing: 0.15rem;
		h2 {
			font-size: 1.2rem;
			font-weight: 300;
			text-transform: uppercase;
			color: var(--ColorGold);
		}
		p {
			font-weight: 600;
			letter-spacing: 0.05rem;
			margin-top: 0.3rem;
		}
	}
	.img-container {
		height: 22rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.img img {
			margin-top: -8rem;
			width: 8rem;
		}
		.img-right {
			position: relative;
			top: 9rem;
		}
	}
`;
export default AboutUs;
