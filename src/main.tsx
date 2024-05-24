import React from "react";
import ReactDOM from "react-dom/client";
import WebApp from "@twa-dev/sdk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import "./styles/main.scss";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
