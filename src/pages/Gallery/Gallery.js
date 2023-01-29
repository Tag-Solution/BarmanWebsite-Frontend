import React from "react";
import { Link } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const Gallery = () => {
	return (
		<div>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"Image Gallery Page"}
				h2Text={"Gallery"}
				h3Text={"Image Gallery"}
				pText={"Évènements"}
			></PageHeader>
			<Link to="/">Volver al Home</Link>
		</div>
	);
};

export default Gallery;
