import axios from "axios";
import { Http } from "../../domain/repositories/Http";

// Base server url
const API_URL = "http://localhost:4200/api";

// Configuration of the headers for communication with the server
const headers = {
  "Content-Type": "application/json",
};

// Axios client configuration
export const httpAxios: Http = {
  get: async <T>(path?: string, params?: Record<string, any>, config?: any) => {
    path = path ? path : API_URL;
    const response = await axios.get(`${path}/animals`, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
  post: async <T>(
    path?: string,
    params?: Record<string, any>,
    config?: any
  ) => {
    path = path ? path : API_URL;
    const response = await axios.post(`${path}/animal`, params);
    return response.data as T;
  },
  put: async <T>(path?: string, params?: any, config?: any) => {
    path = path ? path : API_URL;
    const { id } = params;
    const response = await axios.put(
      `${path}/animal/${id}`,
      { ...params },
      { ...config, headers }
    );
    return response.data as T;
  },
  delete: async <T>(path?: string, params?: any, config?: any) => {
    path = path ? path : API_URL;
    const { id } = params;
    const response = await axios.delete(`${path}/animal/${id}`, {
      ...config,
      headers,
    });
    return response.data as T;
  },
};
