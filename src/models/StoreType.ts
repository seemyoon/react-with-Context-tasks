import {IUserFriendModel} from "./myFriendModel/IUserFriendModel";
import {IPostFriendModel} from "./myFriendModel/IPostFriendModel";

export type StoreType = {
    userStore: {
        allUsers: IUserFriendModel[]
    },
    postStore: {
        allPosts: IPostFriendModel[]
    }
}
