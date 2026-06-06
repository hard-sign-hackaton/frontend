import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  return config;
});
