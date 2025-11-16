import type {IAuthResponse, ILoginForm} from "../types/auth.types.ts";
import {axiosClassic} from "../../api/interceptors.ts";

export const authService = {
    async login(data:ILoginForm) {
        const response = await axiosClassic.post<IAuthResponse>(`/auth/login`, data)
        //if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
        return response.data;
    },

    /*
    async register(data: IRegisterForm) {
        const response = await axiosClassic.post<IAuthResponse>(
            `/auth/register`,
            data
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

        return response.data
    },

    async getNewTokens() {
        const response = await axiosClassic.post<IAuthResponse>(
            '/auth/login/access-token'
        )

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

        return response.data
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('/auth/logout')

        if (response.data) removeFromStorage()

        return response.data
    }*/
}
