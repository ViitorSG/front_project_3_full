import { AxiosError, AxiosInstance } from 'axios'
import Api from './apiInstance'
import {ResponseDefaultApi} from "../../helpers/responseDefaultApi";

export default class ApiMethods {
    private apiInstance: AxiosInstance

    constructor() {
        this.apiInstance = new Api().axiosInstance(true);
    }

    async get<T>(endpoint: string, params?: T, hideError?: boolean): Promise<ResponseDefaultApi<T>> {
        return await this.apiInstance
            .get(endpoint, {params})
            .then(response => new ResponseDefaultApi<T>(true, response.data, response.status))
            .catch((error: AxiosError<any>) => {
                if (hideError) return new ResponseDefaultApi<T>(false, error?.response?.data.message)

                const message = error.response?.data?.message

                return new ResponseDefaultApi<T>(false, error?.response?.data.message)
            })
    }

    async post<T>(endpoint: string, data: any, config?: any, hideError?: boolean): Promise<ResponseDefaultApi<T>> {
        return await this.apiInstance
            .post(endpoint, data, config)
            .then(response => new ResponseDefaultApi<T>(true, response.data, response.status))
            .catch((error: AxiosError<any>) => {
                if (hideError) return new ResponseDefaultApi<T>(false, error?.response?.data.message)

                const message = error.response?.data?.message

                return new ResponseDefaultApi<T>(false, error?.response?.data.message)
            })
    }

    async put<T>(endpoint: string, data: any): Promise<ResponseDefaultApi<T>> {
        return await this.apiInstance
            .put(endpoint, data)
            .then(response => new ResponseDefaultApi<T>(true, response.data, response.status))
            .catch((error: AxiosError<any>) => {
                const message = error.response?.data?.message

                return new ResponseDefaultApi<T>(false, error?.response?.data.message)
            })
    }

    async delete<T>(endpoint: string): Promise<ResponseDefaultApi<T>> {
        return await this.apiInstance
            .delete(endpoint)
            .then(response => new ResponseDefaultApi<T>(true, response.data, response.status))
            .catch((error: AxiosError<any>) => {
                const message = error.response?.data?.message

                return new ResponseDefaultApi<T>(false, error?.response?.data.message)
            })
    }
}