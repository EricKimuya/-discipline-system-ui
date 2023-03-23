import { toast } from "react-toastify";

export function showNotification(body, backGroundClass, position) {
  if (backGroundClass === "success") {
    toast.success(body, {
      theme: "colored",
      hideProgress: true,
      position: position || "top-right",
      autoClose: 2000,
      pauseHover: true,
    });
  } else {
    toast.error(body, {
      theme: "colored",
      hideProgressBar: true,
      position: position || "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseHover: true,
    });
  }
}
