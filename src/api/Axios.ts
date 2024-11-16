import axios from "axios";

export const api = axios.create({
  baseURL: "https://planefx.cloud/api/",
  headers: { "Content-Type": "application/json" },
});
