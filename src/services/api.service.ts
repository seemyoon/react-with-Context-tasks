import axios from "axios";
import {IUserDataModel} from "../models/IUserDataModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {ITokenRefresh} from "../models/ITokenRefresh";
import {ICarWithAuth} from "../models/ICarWithAuth";
import {retrieveLocalStorage} from "../helpers/helper";
import {ICarPaginatedModel} from "../models/CarPaginated";

const axiosInstanceOwuLink = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2/",
    headers: {}
})
const axiosInstanceMyfriendsProfile = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {}
})
axiosInstanceOwuLink.interceptors.request.use(request => {
    if (localStorage.getItem("tokenPair") && request.url !== "/auth/refresh") {
        request.headers.set("Authorization", "Bearer " + retrieveLocalStorage<ITokenRefresh>("tokenPair").access)
    }
    return request;
})

const userService = {
    saveUser: async (userData: IUserDataModel): Promise<boolean> => {
        const response = await axiosInstanceOwuLink.post<UserResponseModel>("/users", userData);
        return !!(response?.data?.id);
    }
}
const authService = {
    authUser: async (authUser: IUserDataModel): Promise<boolean> => {
        let response

            response = await axiosInstanceOwuLink.post<ITokenRefresh>("/auth", authUser)
            localStorage.setItem("tokenPair", JSON.stringify(response.data));
        return !!(response?.data?.access && response?.data?.refresh)
    },
    refresh: async (): Promise<void> => {
        const refreshToken = retrieveLocalStorage<ITokenRefresh>("tokenPair").refresh;
        const response = await axiosInstanceOwuLink.post<ICarWithAuth>("/auth/refresh", {refresh: refreshToken});
        localStorage.setItem("tokenPair", JSON.stringify(response.data));
    }
}
const carsService = {
    getAllCars: async (page: string = "1"): Promise<ICarPaginatedModel | null> => {
        const response = await axiosInstanceOwuLink.get("/cars", {params: {page: page}})
        return response.data
    }
}
export {userService, authService, carsService};