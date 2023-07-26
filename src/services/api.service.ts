import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { config } from 'dotenv';

config();

class ApiService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.BASE_URL,
        });
    }

    public async get<T>(url: string): Promise<AxiosResponse<T>> {
        return this.api.get<T>(url);
    }

    public async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.api.post<T>(url, data);
    }

    public async put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.api.put<T>(url, data);
    }

    public async delete<T>(url: string): Promise<AxiosResponse<T>> {
        return this.api.delete<T>(url);
    }
}

export default ApiService;
