import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { AboutUsProvider } from "./context/2_AboutUsContext";
import { HomepageProvider } from "./context/1_HomepageContext";
import { OwnerProvider } from "./context/3_OwnerContext";
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
