import axios, { type CreateAxiosDefaults } from "axios";

// import authTokenService from "@/services/auth/auth-token.service";
// import authService from "@/services/auth/auth.service";

// import { errorCatch } from "./api.helper";
import { BASE_URL } from "@/config";

const options: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosClassic = axios.create(options);

export const instance = axios.create(options);

instance.interceptors.request.use((config) => {
  // if (process.env.NODE_ENV !== "production") {
  //   const token = authTokenService.getAccessToken();
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  // }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    // if (
    //   (error?.response?.status === 401 ||
    //     errorCatch(error) === "jwt expired" ||
    //     errorCatch(error) === "jwt must be provided") &&
    //   error.config &&
    //   !error.config._isRetry
    // ) {
    //   originalRequest._isRetry = true;

    //   try {
    //     await authService.getNewTokens();
    //     return instance.request(originalRequest);
    //   } catch (error: any) {
    //     if (
    //       errorCatch(error) === "jwt expired" ||
    //       errorCatch(error) === "Refresh token not passed" ||
    //       error?.response?.status === 401
    //     ) {
    //       authTokenService.removeAccessToken();
    //       return null;
    //     }
    //   }
    // }

    throw error;
  }
);
