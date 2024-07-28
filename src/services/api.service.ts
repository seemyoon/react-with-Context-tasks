import axios from "axios";
import {IUserDataModel} from "../models/IUserDataModel";
import {UserResponseModel} from "../models/UserResponseModel";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2/",
    headers: {}
})

const userService = {
    saveUser: async (userData: IUserDataModel):Promise<boolean> => {
        const response = await axiosInstance.post<UserResponseModel>("/users", userData);
        return !!(response?.data?.id);
    }
}
export { userService };