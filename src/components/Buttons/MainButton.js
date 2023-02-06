import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

/*
* === ClassNames Button ===
Ej: gold-white-transparent-btn
1. border-color
2. font-color
3. background-color 
*/
const MainButton = ({
	isLinkBtn,
	linkPath,
	btnText,
	buttonAction,
	classNames,
}) => {
	return isLinkBtn ? (
		<Wrapper>
			<Link to={linkPath}>
				<button className={`base-btn-link ${classNames}`}>{btnText}</button>
			</Link>
		</Wrapper>
	) : (
		<button className={`base-btn-link ${classNames}`} onClick={buttonAction}>
			{btnText}
		</button>
	);
};

const Wrapper = styled.main``;

export default MainButton;
