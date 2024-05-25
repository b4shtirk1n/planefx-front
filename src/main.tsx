import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import "./styles/main.scss";

Telegram.WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
