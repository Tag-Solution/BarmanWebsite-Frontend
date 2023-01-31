import React from "react";
import styled from "styled-components";

const CardModel1 = ({ title, subtitle, description, image }) => {
	return (
		<Wrapper>
			<div className="feature-center">
				<div className="feature-top">
					<img src={image.imageUrl} alt="Alt" />
				</div>
				<div className="feature-bot">
					<h2>{title}</h2>
					<p className="paragraph">{description}</p>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5rem;
	.feature-center {
		.feature-top {
			width: 100%;
			height: 16rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.feature-bot {
			width: 97%;
			margin: 0 auto;
			font-family: var(--FontsTitle);
			font-weight: 300;
			h2 {
				letter-spacing: 0.12rem;
				font-size: 1.35rem;
				margin: 1.6rem 0rem;
				color: var(--ColorBlack-85);
			}
		}
	}
`;

export default CardModel1;
