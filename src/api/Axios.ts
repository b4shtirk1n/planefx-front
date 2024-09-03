import axios from "axios";

export const api = axios.create({
	baseURL: "http://balancer/api/",
	headers: { "Content-Type": "application/json" },
});
