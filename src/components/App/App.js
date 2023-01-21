import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage, Error } from "../../pages/";

const App = () => {
	return (
		<BrowserRouter basename="/BarmanWebsite-Frontend">
			<Routes>
				<Route
					path="/"
					element={<Homepage isFullScreen={false}></Homepage>}
				></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
