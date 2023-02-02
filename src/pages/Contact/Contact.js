import React from "react";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import { PageHeader } from "../../components/PageHeader";
import { ContactForm } from "../../components/Forms";
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

			{/* =============== */}
			{/* Contact Section */}
			{/* =============== */}
			<div className="section">
				<div className="section-center">
					{/* Contact triptico */}
					<article className="contact-triptic-container">
						<div className="single-card">
							<span>{<FiMapPin></FiMapPin>}</span>
							<div className="info">
								<h2>Address</h2>
								<p>{address}</p>
							</div>
						</div>
						<div className="single-card">
							<span>{<MdPhoneIphone></MdPhoneIphone>}</span>
							<div className="info">
								<h2>Phone</h2>
								<p>{mobile}</p>
							</div>
						</div>
						<div className="single-card">
							<span>{<HiOutlineMail></HiOutlineMail>}</span>
							<div className="info">
								<h2>e-mail</h2>
								<p>{email}</p>
							</div>
						</div>
					</article>

					<div className="divider"></div>

					{/* Contact Form */}
					<div className="contact-form-container">
						<div className="contact-texts-container">
							<h3>Kevin Maurin</h3>
							<h2>Get in touch!</h2>
							<p className="paragraph">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Temporibus pariatur maiores voluptatibus.
							</p>
						</div>

						<div className="divider-small"></div>

						<ContactForm></ContactForm>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.divider {
		height: 6rem;
	}
	.divider-small {
		height: 3rem;
	}

	// Contact Triptico
	.contact-triptic-container {
		background: var(--ColorGoldLight);
		display: flex;
		flex-direction: column;
		.single-card {
			width: 90%;
			height: 9rem;
			margin: 0 auto;
			display: grid;
			grid-template-columns: 4rem 1fr;
			span {
				display: grid;
				place-items: center;
				font-size: 2.7rem;
				color: var(--ColorGold);
			}
			.info {
				padding-left: 0.5rem;
				display: flex;
				align-items: flex-start;
				justify-content: center;
				flex-direction: column;
				letter-spacing: 0.03rem;
				h2 {
					font-size: 1.3rem;
					font-family: var(--FontTexts);
					font-weight: 300;
					color: var(--ColorBlack-7);
					text-transform: capitalize;
					margin: 0.25rem 0rem;
				}
				p {
					color: var(--ColorGold);
					font-weight: 300;
					font-family: var(--FontTitles);
				}
			}
		}
	}

	// Contact Form
	.contact-form-container {
		// Texts
		.contact-texts-container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-family: var(--FontTitles);
			h3 {
				text-transform: uppercase;
				font-size: 1rem;
				font-weight: 300;
				letter-spacing: 0.2rem;
				color: var(--ColorGold);
			}
			h2 {
				font-size: 2rem;
				font-weight: 300;
				letter-spacing: 0.2rem;
				color: var(--ColorBlack-85);
				margin: 1rem 0rem;
			}
		}
		// Form
	}
`;

export default Contact;
