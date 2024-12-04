import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUserStore } from "./stores/UserStore";
import React from "react";
import ReactDOM from "react-dom/client";
import WebApp from "@twa-dev/sdk";
import ProfilePage from "./pages/ProfilePage";
import AccountsPage from "./pages/AccountPage";
import SubscribePage from "./pages/SubscribePage";
import OrderPage from "./pages/OrderPage";
import "./styles/main.scss";

WebApp.ready();
useUserStore.getState().fetchUser();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/:id" element={<OrderPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
