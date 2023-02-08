import React from "react";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";

import { CardModel1 } from "../../components/Cards/CardModel1";
import { MainButton } from "../../components/Buttons";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";
import { FeaturesPage } from "../../utils/temp/entity_constants";

const Features = () => {
	const { id, header, subtitle, title, image } = FeaturesPage.pageHeader;
	return (
		<Wrapper>
			<PageHeader
				imgSrc={image.imageUrl}
				imgAlt={header}
				h2Text={header}
				h3Text={title}
				pText={subtitle}
			></PageHeader>

			{/* ================ */}
			{/* Features Section */}
			{/* ================ */}
			<div className="section">
				<div className="section-center">
					{/* Features Map */}
					{FeaturesPage.features?.map((singleFeature) => {
						console.log(singleFeature);
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
