import React from "react";
import styled from "styled-components";
import { MainButton } from "../../Buttons";

const OverlayText = ({
	h1Text,
	h2Text,
	h3Text,
	pText,
	spanText,
	redirectLink,
	redirectText,
	redirectPath,
	isPageHeader,
}) => {
	return (
		<Wrapper>
			<div className={isPageHeader ? "page-header" : "text-container"}>
				{h1Text && <h1>{h1Text}</h1>}
				{h2Text && <h2>{h2Text}</h2>}
				{h3Text && <h3>{h3Text}</h3>}
				{pText && <p>{pText}</p>}
				{spanText && <span>{spanText}</span>}
				{redirectLink && (
					<div className="btn-positioning">
						<MainButton
							isLinkBtn
							linkPath={redirectPath}
							btnText={redirectText}
							classNames="gold-white-gold-btn"
						></MainButton>
					</div>
				)}
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.main`
	// === Overlay ===
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

	// === Page Header
	.page-header {
		z-index: 2;
		width: 100%;
		height: 25vh;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		font-family: var(--FontTitles);
		font-size: 1.2rem;
		font-weight: 300;
		color: var(--ColorWhite);
		letter-spacing: 0.3rem;
		display: grid;
		place-items: center;
		h2 {
			font-size: 0.9rem;
			text-transform: uppercase;
			font-weight: 200;
		}
		h3 {
			font-size: 1.1rem;
			font-family: var(--FontTexts);
			font-weight: 400;
		}
		p {
			font-size: 1rem;
			margin-top: -2rem;
			color: var(--ColorGold);
			letter-spacing: 0.4rem;
		}
	}
	@media (min-width: 480px) {
		.page-header {
			top: 25%;
			transform: translate(-50%, -25%);
			height: 30vh;
			h2 {
				font-size: 1.45rem;
			}
			h3 {
				font-size: 1.8rem;
			}
			p {
				font-size: 1.4rem;
			}
		}
	}
	@media (min-width: 768px) {
		.page-header {
			top: 17%;
			transform: translate(-50%, -17%);
			p {
				font-size: 1.6rem;
			}
		}
	}
	@media (min-width: 1200px) {
		.page-header {
			top: 20%;
			transform: translate(-50%, -20%);
		}
	}
`;

export default OverlayText;
