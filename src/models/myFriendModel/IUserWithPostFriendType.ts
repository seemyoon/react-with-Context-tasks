import {IUserFriendModel} from "./IUserFriendModel";
import {IPostFriendModel} from "./IPostFriendModel";

export type IUserWithPostFriendType = IUserFriendModel & { posts: IPostFriendModel[] }