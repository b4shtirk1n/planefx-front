import axios from "axios";

export const api = axios.create({
	baseURL: "http://planefx.cloud/api/",
	headers: { "Content-Type": "application/json" },
});
