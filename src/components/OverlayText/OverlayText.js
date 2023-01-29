import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OverlayText = ({
	h1Text,
	h2Text,
	h3Text,
	pText,
	spanText,
	redirectLink,
	redirectText,
	redirectPath,
}) => {
	return (
		<Wrapper>
			<div className="text-container">
				{h1Text && <h1>{h1Text}</h1>}
				{h2Text && <h2>{h2Text}</h2>}
				{h3Text && <h3>{h3Text}</h3>}
				{pText && <p>{pText}</p>}
				{spanText && <span>{spanText}</span>}
				{redirectLink && (
					<Link className="main-btn-fill btn-positioning" to={redirectPath}>
						{redirectText}
					</Link>
				)}
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.main`
	.text-container {
		z-index: 2;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: var(--FontTitles);
		font-size: 1.2rem;
		font-weight: 300;
		color: var(--ColorWhite);
		letter-spacing: 0.17rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		h1 {
			font-size: 8rem;
		}
		.btn-positioning {
			margin-top: 5rem;
		}
	}
	@media (min-width: 768px) {
		.text-container {
			font-size: 1.6rem;
			.btn-positioning {
				font-size: 1.3rem;
			}
		}
	}
`;

export default OverlayText;
