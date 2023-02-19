import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { AboutUsProvider } from "./context/AboutUsContext";
import { HomepageProvider } from "./context/HomepageContext";
import { OwnerProvider } from "./context/OwnerContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HomepageProvider>
		<AboutUsProvider>
			<OwnerProvider>
				<App />
			</OwnerProvider>
		</AboutUsProvider>
	</HomepageProvider>
);
