import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import WebApp from "@twa-dev/sdk";
import ProfilePage from "./pages/ProfilePage";
import AccountsPage from "./pages/AccountPage";
import "./styles/main.scss";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/accounts" element={<AccountsPage />} />
				<Route path="/" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
