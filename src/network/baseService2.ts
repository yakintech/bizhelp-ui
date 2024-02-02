import { axiosInstance } from "./axiosInstance";

class BaseService2 implements IBaseService{
    get = async <T>(url: string): Promise<T> => {
        try {
            let axiosResponse = await axiosInstance.get(url);
            return axiosResponse.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    getById = async  <T>(url: string, id: any): Promise<T> => {
        try {
            let axiosResponse = await axiosInstance.get(`${url}/${id}`);
            return axiosResponse.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    add = async (url: string, data: any) => {
        try {
            let response = await axiosInstance.post(url, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    update = async (url: string, data: any) => {
        try {
            let response = await axiosInstance.put(url, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    delete = async (url: string, id: any) => {
        try {
            let response = await axiosInstance.delete(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default BaseService2;



export interface IBaseService {
    get: <T>(url: string) => Promise<T>;
    getById: <T>(url: string, id: any) => Promise<T>;
    add: (url: string, data: any) => Promise<any>;
    update: (url: string, data: any) => Promise<any>;
    delete: (url: string, id: any) => Promise<any>;
}