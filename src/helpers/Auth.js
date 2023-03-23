import { AUTH_ADMIN_KEY } from "./Constants";

function currentAdminNoPromise() {
  return getFromLocal(AUTH_ADMIN_KEY);
}

export function getCurrentAdmin() {
  const admin = currentAdminNoPromise();
  return new Promise(function (resolve, reject) {
    resolve(admin);
  });
}

export function getFromLocal(itemName) {
  let fromLocal = localStorage.getItem(itemName);
  if (!fromLocal) {
    return;
  }

  return JSON.parse(fromLocal);
}

export function storeLocally(itemName, itemValue) {
  localStorage.setItem(itemName, JSON.stringify(itemValue));
}

export function removeFromLocal() {
  localStorage.removeItem(AUTH_ADMIN_KEY);
}
