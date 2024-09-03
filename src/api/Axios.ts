import axios from "axios";

export const api = axios.create({
	baseURL: "https://balancer/api/",
	headers: { "Content-Type": "application/json" },
});
