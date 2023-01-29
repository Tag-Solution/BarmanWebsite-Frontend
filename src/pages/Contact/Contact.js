import React from "react";
import { Link } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const Contact = () => {
	return (
		<div>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"About Us Page"}
				h2Text={"Contact Us"}
				h3Text={"Réservations"}
				pText={"Genève, Suisse"}
			></PageHeader>
			<Link to="/">Volver</Link>
		</div>
	);
};

export default Contact;
