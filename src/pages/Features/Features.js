import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";

import { CardModel1 } from "../../components/Cards/CardModel1";
import { MainButton } from "../../components/Buttons";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";
import { features } from "../../utils/temp/features";

const Features = () => {
	return (
		<Wrapper>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"Soirées Thematiques Page"}
				h2Text={"The Best"}
				h3Text={"Soirées Thématiques!"}
				pText={"Cocktails & Vins"}
			></PageHeader>

			{/* ================ */}
			{/* Features Section */}
			{/* ================ */}
			<div className="section">
				<div className="section-center">
					{/* Features Map */}
					{features.map((singleFeature) => {
						const { id, title, description } = singleFeature;
						return (
							<CardModel1
								key={id}
								title={title}
								description={description}
								image={singleFeature.image}
							></CardModel1>
						);
					})}
					<div className="btn-container">
						<MainButton
							isLinkBtn
							linkPath={"/"}
							btnText={"Return to Home"}
							classNames="gold-white-gold-btn"
						></MainButton>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.btn-container {
		margin-top: 1rem;
		text-align: center;
	}
`;

export default Features;
