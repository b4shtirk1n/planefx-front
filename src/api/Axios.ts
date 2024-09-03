import axios from "axios";

export const api = axios.create({
	baseURL: "http://api/api/",
	headers: { "Content-Type": "application/json" },
});
