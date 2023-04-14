import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import Qs from "qs";
import Cookies from "js-cookie";
// import { TH_TOKEN } from "./constants";

// Stringify the params
// axios.interceptors.request.use((config) => {
//   const t = config.paramsSerializer;
//   return t;
//   // config = (params: any) => {
//   //   return Qs.stringify(params, {
//   //     arrayFormat: "brackets",
//   //   });
//   // };
//   // Adding default headers
//   // if (config.headers) config.headers["Content-Type"] = "application/json";
//   // return config;
// });

const fetchJSON = (
  url: string,
  options: AxiosRequestConfig = {},
  overriddenToken = ""
): AxiosPromise<any> => {
  let accessToken;
  const cookieToken = Cookies.get("auth_token");

  if (overriddenToken) {
    accessToken = overriddenToken;
  } else if (cookieToken) {
    accessToken = cookieToken;
  }

  options = {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}` || "",
    },
  };

  const res = axios(url, options);
  return res;
};

export { fetchJSON };
