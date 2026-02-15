import { notification } from "./toastNotification";

export const handleError = (error: any) => {
  const message =
    error?.response?.data?.message || error.message || "Something went wrong";

  if (
    error.response?.status === 401 &&
    message.toLowerCase().includes("invalid or expired token")
  ) {
    console.warn(
      "Unauthorized - you can redirect to login or clear storage here"
    );
    // Optional:
    localStorage.clear();
    window.location.href = "/login";
  }

  // Optional: toast or log
  notification("error", message);

  return Promise.reject(message);
};
