import axios from "axios";
import { handleError } from "../utils/apiErrorHandler";

const apiUrl = import.meta.env.VITE_LOCAL_API_URL;
const userProfileKey = import.meta.env.VITE_USER_PROFILE;

export const PUBLICAPI = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const PRIVATEAPI = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

PRIVATEAPI.interceptors.request.use((config: any) => {
  try {
    const userProfile = JSON.parse(
      localStorage.getItem(userProfileKey) ?? "{}"
    );
    const token = userProfile?.token;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.warn("Failed to get token:", error);
  }

  return config;
});

// Add response interceptors
PRIVATEAPI.interceptors.response.use((res: any) => res, handleError);
PUBLICAPI.interceptors.response.use((res: any) => res, handleError);
