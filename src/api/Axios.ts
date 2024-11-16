import axios from "axios";

export const api = axios.create({
  baseURL: "https://planefx.cloud/api/",
  headers: { "Content-Type": "application/json" },
});

export const apiFiles = axios.create({
  baseURL: "https://planefx.cloud/api/",
  headers: { "Content-Type": "application/octet-stream" },
});
