
import type {IAppResponse, TypeAppFormCreate, TypeAppFormUpdate} from "../types/app.types.ts";
import {axiosWithAuth} from "../../api/interceptors.ts";


class AppService{

    BASE_URL :string = '/apps'


    async getAll(){
        const response = await axiosWithAuth.get<IAppResponse[]>(this.BASE_URL)

        return response.data
    }

    async create(data : TypeAppFormCreate){
        console.log(data);
        const response = await axiosWithAuth.post<IAppResponse>(`${this.BASE_URL}/create`,data)
        return response.data
    }

    async update(id : string,data : TypeAppFormUpdate){
        const response = await axiosWithAuth.put<IAppResponse>(`${this.BASE_URL}/${id}`,data)
        return response.data
    }

    async delete(id : string){
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response.data
    }
}

export const appService = new AppService()