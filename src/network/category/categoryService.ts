import { CategoryModel } from "../../model/category";
import { baseService } from "../baseService";


export const categoryService = {

    getAll: async ()  => {
        try {
            var response = await baseService.get<CategoryModel[]>("categories");
            return response;

        } catch (error) {
            console.log("/api/categories - CategoryService getAll", error);
            throw error;
        }
    },
    getById: async (id: any) => {
        try {
            var response = await baseService.getById<CategoryModel>("categories", id);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    add: async (data: any) => {
        try {
            var response = await baseService.add("categories", data);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

