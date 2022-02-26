/* eslint-disable */
import axios from "axios";
import Auth from "./Auth";
import {BASE_URL} from "./config";

export default class Request {
  constructor(headers) {
    this.http = axios.create({
      baseURL: BASE_URL,
      withCredentials: false,
    });

    this.http.interceptors.request.use((config) => {
      let token = Auth.getToken();
      config.headers = {
        Authorization: token?`Bearer ${token}` : "",
        "Content-Type": "application/json",
        ...headers,
      };
      return config;
    });

    this.http.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response) {
          if (error.response.status && error.response.status === 403) {
            return Promise.reject(error.response.data);
          } else {
            return Promise.reject(error.response.data);
          }
        } else if (error.request) {
          return Promise.reject(error.request);
        } else {
          return Promise.reject(error);
        }
      }
    );
    for (const method of ["get", "post", "put", "delete"]) {
      this[method] = this.http[method];
    }
  }
}
