import { baseService } from "../baseService";


export const categoryService = {

    getAll: async () => {
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

}


export interface CategoryModel {
    id: number;
    name: string;
    description: string;
}