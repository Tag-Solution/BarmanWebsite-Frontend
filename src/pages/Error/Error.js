import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h1>Pagina no encontrada!</h1>
			<Link to="/">Volver al Home</Link>
		</div>
	);
};

export default Error;
