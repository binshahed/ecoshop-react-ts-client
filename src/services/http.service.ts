import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_API_BASE_URL,
  timeout: 15000,
  headers: { "X-Custom-Header": "foobar" },
};

const instance: AxiosInstance = axios.create(axiosConfig);

instance.get("/users").then((res) => res.data);

class Request {
  async get(url: string): Promise<AxiosResponse> {
    return instance.get(url).then((res) => res.data);
  }
  async post(url: string, body: any): Promise<AxiosResponse> {
    return instance.post(url, body).then((res) => res.data);
  }
  async update(url: string, body: any): Promise<AxiosResponse> {
    return instance.patch(url, body).then((res) => res.data);
  }
  async delete(url: string): Promise<AxiosResponse> {
    return instance.delete(url).then((res) => res.data);
  }
}

const httpRequest = new Request();

export default httpRequest;
