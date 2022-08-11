import axios from "axios";
import { Http } from "../../domain/repositories/Http";

const API_URL = "http://localhost:4200/api";

const headers = {
  "Content-Type": "application/json",
};

export const httpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.get(`${API_URL}/animals`, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.post(
      `${API_URL}/animal`,
      { ...params },
      { ...config, headers }
    );
    return response.data as T;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.put(
      `${API_URL}/animal`,
      { ...params },
      { ...config, headers }
    );
    return response.data as T;
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const {id} = params;
    const response = await axios.delete(`${API_URL}/animal/${id}`, {
      ...config,
      headers,
    });
    return response.data as T;
  },
};
