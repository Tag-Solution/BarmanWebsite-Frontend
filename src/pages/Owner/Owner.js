import React from "react";
import { Link } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const Owner = () => {
	return (
		<div>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"Owner Page"}
				h2Text={"Owner"}
				h3Text={"Kevin Maurin"}
				pText={"Mixologist"}
			></PageHeader>
			<Link to="/">Volver al Home</Link>
		</div>
	);
};

export default Owner;
