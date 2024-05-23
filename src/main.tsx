import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./pages/Profile";
import WebApp from "@twa-dev/sdk";
import "./styles/main.scss";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Profile />
	</React.StrictMode>
);
