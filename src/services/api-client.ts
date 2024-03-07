import axios, { AxiosRequestConfig, CanceledError } from 'axios'
import FetchResponse from '../modal/FetchResponse'

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '77d2294ad78c4ff1951136911e9bd2f3'
    }
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient
export { CanceledError }