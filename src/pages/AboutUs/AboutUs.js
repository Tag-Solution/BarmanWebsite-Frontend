import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageHeader } from "../../components/PageHeader";

import AboutUsBG from "../../assets/temp/AboutUsBG.jpg";

const AboutUs = () => {
	return (
		<Wrapper>
			<PageHeader
				imgSrc={AboutUsBG}
				imgAlt={"About Us Page"}
				h2Text={"About Us"}
				h3Text={"Nyu's Bartending"}
				pText={"History"}
			></PageHeader>
			<Link to="/">Volver</Link>
		</Wrapper>
	);
};

const Wrapper = styled.main``;
export default AboutUs;
