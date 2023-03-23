import { trackPromise } from "react-promise-tracker";
import Api from "./Api";
import { showNotification } from "./Notifications";

function emptyPromiseTracker(promiseFunc) {
  return promiseFunc;
}

function isResponseSuccess(res) {
  return res.status >= 200 && res.status <= 299;
}

export function sendPostRequest(
  url,
  params,
  successMessage,
  isTrackPromise = true
) {
  const promiseTrack = isTrackPromise ? trackPromise : emptyPromiseTracker;

  return promiseTrack(
    handleError(handleSuccess(Api.post(url, params), successMessage))
  ).then((res) => {
    return isResponseSuccess(res) ? res : Promise.reject(res);
  });
}

export function sendGetRequest(url, successMessage, isTrackPromise = true) {
  const promiseTrack = isTrackPromise ? trackPromise : emptyPromiseTracker;

  return promiseTrack(
    handleError(handleSuccess(Api.get(url), successMessage))
  ).then((res) => {
    return isResponseSuccess(res) ? res : Promise.reject(res);
  });
}

function handleSuccess(promiseFunc, successMessage) {
  return promiseFunc.then((res) => {
    if (successMessage) {
      showNotification(successMessage, "success", "top-right");
    }
    return res;
  });
}

function handleError(promiseFunc) {
  return promiseFunc.catch((err) => {
    if (err?.response?.data) {
      const message = err.response.data.error_message;
      if (message) {
        showNotification(message, "error");
      } else {
        showNotification("There was a critical server error.", "error");
      }
    } else {
      showNotification(err.message || "You are offline!", "error");
    }

    return err;
  });
}
