import axios, { AxiosInstance } from 'axios';

export default class Api {
  axiosInstance(auth = false): AxiosInstance {

    return axios.create({
      baseURL: 'http://localhost:8080',
    });
  }
}