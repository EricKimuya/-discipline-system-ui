import axios from "axios";

import { getFromLocal, removeFromLocal } from "./Auth";
import {
  AUTH_ADMIN_KEY,
  CONFIG,
  STATUS_CODE_NOT_AUTHENTICATED,
} from "./Constants";

let api = axios.create({
  baseURL: CONFIG.api_url,
  withCredentials: false,
});

let admin = getFromLocal(AUTH_ADMIN_KEY);

if (admin) {
  api = axios.create({
    baseURL: CONFIG.api_url,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${admin}`,
    },
  });

  api.interceptors.response.use(undefined, (err) => {
    if (err.response && err.response.status === STATUS_CODE_NOT_AUTHENTICATED) {
      removeFromLocal(AUTH_ADMIN_KEY);
      window.location.reload(false);
      return Promise.reject({
        response: {
          data: {
            message: "Not authenticated, please login to continue",
          },
        },
      });
    }

    return Promise.reject(err);
  });
}

export default api;
