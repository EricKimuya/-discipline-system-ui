export function formatUrl(url, ...args) {
  let urlParams = "";
  args.forEach((arg) => {
    for (let key in arg) {
      if (Array.isArray(arg[key]) && !arg[key].length) {
        continue;
      }
      if (arg[key]) {
        urlParams = `${urlParams}${key}=${arg[key]}&`;
      }
      if (arg[key] === 0) {
        urlParams = `${urlParams}${key}=${arg[key]}&`; //allow for value=0
      }
    }
  });
  urlParams = urlParams.substr(0, urlParams.length - 1); //remove the & at the end

  return `${url}?${urlParams}`;
}
