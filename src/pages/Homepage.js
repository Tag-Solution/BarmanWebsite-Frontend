import React from "react";
import { Link } from "react-router-dom";

import homeBg1 from "../assets/static/homepage/homepageBg1.jpg";

const Homepage = () => {
	return (
		<>
			<div className="home-sect">
				{/* Background Image */}
				<div className="home-bg">
					<img src={homeBg1} alt="BarmanWebsite" />
					<div className="home-bg-overlay"></div>
				</div>
				{/* Info */}
				<div className="home-info-container">
					<h4>Desde 1920</h4>
					<h1>Welcome a Barman Website</h1>
					<h2>Bar & Cocktails</h2>
					<p>@instagram.barman</p>

					{/* Button */}
					<Link to="/prueba-link-fallido" className="home-btn">
						Ver Menu!
					</Link>
				</div>
			</div>
		</>
	);
};

export default Homepage;
