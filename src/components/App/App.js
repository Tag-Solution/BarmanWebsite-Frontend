import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
	Homepage,
	AboutUs,
	Owner,
	Features,
	Gallery,
	Contact,
	Error,
} from "../../pages/";

import ScrollToTop from "../Utils/ScrollToTop";

const App = () => {
	return (
		<BrowserRouter basename="/BarmanWebsite-Frontend">
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
				<Route path="/owner" element={<Owner></Owner>}></Route>
				<Route path="/features" element={<Features></Features>}></Route>
				<Route path="/gallery" element={<Gallery></Gallery>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
