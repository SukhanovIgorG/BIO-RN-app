import { BASE_URL } from "@/config";
import axios from "axios";
import { logout, refreshToken } from "./auth.service";
import { getAccessToken } from "./token.service";

console.log("BASE_URL :>> ", BASE_URL);

export const instance = axios.create({
  baseURL: BASE_URL,
  // baseURL: "http://192.168.31.60:3000/api",
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      if (!config.headers) {
        // @ts-ignore
        config.headers = {};
      }

      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry // метка для предотвращения бесконечного цикла
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              resolve(instance(originalRequest));
            },
            reject: (err: any) => reject(err),
          });
        });
      }

      isRefreshing = true;

      const newToken = await refreshToken();

      if (newToken) {
        processQueue(null, newToken);
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return instance(originalRequest);
      } else {
        processQueue(new Error("Refresh token failed"), null);
        await logout();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
