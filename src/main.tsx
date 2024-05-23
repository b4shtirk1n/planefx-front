import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./pages/Profile";
import WebApp from "@twa-dev/sdk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
