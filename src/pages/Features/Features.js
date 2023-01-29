import React from "react";
import { Link } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const Features = () => {
	return (
		<div>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"Soirées Thematiques Page"}
				h2Text={"The Best"}
				h3Text={"Soirées Thématiques!"}
				pText={"Cocktails & Vins"}
			></PageHeader>
			<Link to="/">Volver al Home</Link>
		</div>
	);
};

export default Features;
