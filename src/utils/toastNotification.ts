import { toast } from "react-toastify";

export const notification = (
  type: "success" | "warning" | "error",
  message: string
) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.error("Invalid error type");
  }
};
