import {StoreType} from "../models/StoreType";
import {createContext, useContext} from "react";

const defaultValue: StoreType = {
    userStore: {
        allUsers: []
    }, postStore: {
        allPosts: []
    }
}
export const MyContext = createContext<StoreType>(defaultValue)
export const useMyContext = (): StoreType => useContext(MyContext)
