import React from "react";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";
import { contact_info } from "../../utils/temp/contact_info";

const Contact = () => {
	const { id, address, mobile, email, facebook, instagram, twitter, youtube } =
		contact_info;
	return (
		<Wrapper>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"About Us Page"}
				h2Text={"Contact Us"}
				h3Text={"Réservations"}
				pText={"Genève, Suisse"}
			></PageHeader>
			<div className="section">
				<div className="section-center">
					{/* Contact triptico */}
					<article className="contact-info-container">
						<div className="single-card">
							<span>T</span>
							<div className="info">
								<h2>Address</h2>
								<p>{address}</p>
							</div>
						</div>
						<div className="single-card">
							<span>T</span>
							<div className="info">
								<h2>Phone</h2>
								<p>{mobile}</p>
							</div>
						</div>
						<div className="single-card">
							<span>T</span>
							<div className="info">
								<h2>e-mail</h2>
								<p>{email}</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.contact-info-container {
		background: var(--ColorGoldLight);
		display: flex;
		flex-direction: column;
		.single-card {
			width: 90%;
			height: 8.7rem;
			margin: 0 auto;
			display: grid;
			grid-template-columns: 4rem 1fr;
			span {
				display: grid;
				place-items: center;
			}
			.info {
				display: flex;
				align-items: flex-start;
				justify-content: center;
				flex-direction: column;
			}
		}
	}
`;

export default Contact;
