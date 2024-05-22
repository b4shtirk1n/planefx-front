import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import WebApp from "@twa-dev/sdk";
import "./styles/main.scss";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
