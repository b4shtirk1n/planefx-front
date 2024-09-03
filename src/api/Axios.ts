import axios from "axios";

export const api = axios.create({
	baseURL: "https://www.planefx.cloud/api/",
});
