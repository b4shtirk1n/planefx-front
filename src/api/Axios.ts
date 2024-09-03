import axios from "axios";

export const api = axios.create({
	baseURL: "http://api:5000/api/",
	headers: { "Content-Type": "application/json" },
});
