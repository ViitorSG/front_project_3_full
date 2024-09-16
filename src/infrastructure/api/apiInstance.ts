import axios, { AxiosInstance } from "axios";

export default class Api {
  axiosInstance(): AxiosInstance {
    const axiosInstance = axios.create({
      baseURL: 'localhost:3000',
      responseType: "json",
    });

    return axiosInstance;
  }
}
