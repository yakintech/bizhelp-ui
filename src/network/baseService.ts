import { axiosInstance } from "./axiosInstance"


export const baseService = {
    //Tüm get requestlerini buradan yapacağız.
    get: async <T>(url: string): Promise<ResponseType<T>> => {
        try {
            let response: ResponseType<T> = {}

            const axiosResponse = await axiosInstance.get(url);

            response.data = axiosResponse.data;
            response.success = true;
            response.statusCode = axiosResponse.status;
            response.errorMessage = "";

            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getById: async  <T>(url: string, id: any): Promise<ResponseType<T>> => {
        try {
            let axiosResponse = await axiosInstance.get(`${url}/${id}`);

            let response: ResponseType<T> = {
                data: axiosResponse.data,
                success: true,
                statusCode: axiosResponse.status
            }

            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    add: async (url: string, data: any) => {
        try {
            let response = await axiosInstance.post(url, data);
            return response.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    update: async (url: string, data: any) => {
        try {
            let response = await axiosInstance.put(url, data);
            return response.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    delete: async (url: string, id: any) => {
        try {
            let response = await axiosInstance.delete(`${url}/${id}`);
            return response.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
}




export type ResponseType<T> = {
    success?: boolean;
    data?: T;
    errorMessage?: string;
    statusCode?: number;
}







