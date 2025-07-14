// import axios from "axios";

// const userProfileKey = import.meta.env.VITE_USER_PROFILE;
// const apiUrl = import.meta.env.VITE_LOCAL_API_URL;

// export const PRIVATEAPI = axios.create({
//   baseURL: apiUrl,
//   headers: {
//     Authorization: `Bearer ${
//       JSON.parse(localStorage.getItem(userProfileKey) ?? '{"token": ""}').token
//     }`,
//   },
// });

// export const PUBLICAPI = axios.create({
//   baseURL: import.meta.env.VITE_LOCAL_API_URL,
// });


import axios from "axios";
import { toastNotification } from "../utils/toastNotification";

const apiUrl = import.meta.env.VITE_LOCAL_API_URL;
const userProfileKey = import.meta.env.VITE_USER_PROFILE;

export const PUBLICAPI = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const PRIVATEAPI = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

PRIVATEAPI.interceptors.request.use((config: any) => {
  try {
    const userProfile = JSON.parse(localStorage.getItem(userProfileKey) ?? '{}');
    const token = userProfile?.token;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.warn('Failed to get token:', error);
  }

  return config;
});

const handleError = (error: any) => {
  const message = error?.response?.data?.message || error.message || 'Something went wrong';

  if (error.response?.status === 401) {
    console.warn('Unauthorized - you can redirect to login or clear storage here');
    // Optional: localStorage.clear(); window.location.href = '/login';
  }

  // Optional: toast or log
  // showToast({ type: 'error', message });

  return Promise.reject(message);
};

// Add response interceptors
PRIVATEAPI.interceptors.response.use((res: any) => res, handleError);
PUBLICAPI.interceptors.response.use((res: any) => res, handleError);
