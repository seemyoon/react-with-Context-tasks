import axios from "axios";
import {IUserDataModel} from "../models/IUserDataModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {ITokenRefresh} from "../models/ITokenRefresh";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2/",
    headers: {}
})

const userService = {
    saveUser: async (userData: IUserDataModel): Promise<boolean> => {
        const response = await axiosInstance.post<UserResponseModel>("/users", userData);
        return !!(response?.data?.id);
    }
}
const authService = {
    authUser: async (authUser: IUserDataModel): Promise<boolean> => {
        let response
        try {
            response = await axiosInstance.post<ITokenRefresh>("/auth", authUser)
            localStorage.setItem("tokenPair", JSON.stringify(response.data));
        } catch (e) {
            console.log(e)
        }
        return !!(response?.data?.access && response?.data?.refresh)
    }
}
export {userService, authService};