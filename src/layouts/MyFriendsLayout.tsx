import React, {useEffect, useState} from 'react';
import MyFriendsHeaderComponent from "../components/headersComponents/MyFriendsHeaderComponent";
import {Outlet} from "react-router-dom";
import {MyContext} from "../context/ContextProvider";
import {myFriendsPostsService, myFriendsUsersService} from "../services/api.service";
import {IUserFriendModel} from "../models/myFriendModel/IUserFriendModel";
import {IPostFriendModel} from "../models/myFriendModel/IPostFriendModel";

const MyFriendsLayout = () => {
    const [users, setUsers] = useState<IUserFriendModel[]>([])
    const [posts, setPosts] = useState<IPostFriendModel[]>([])
    useEffect(() => {
        myFriendsUsersService.getAllUsers().then(value => setUsers(value.data))
        myFriendsPostsService.getAllUsersPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            <MyContext.Provider value={
                {
                    userStore: {
                        allUsers: users
                    },
                    postStore: {
                        allPosts: posts
                    }
                }
            }>
                <MyFriendsHeaderComponent/>
                <Outlet/>
            </MyContext.Provider>

        </div>
    );
};

export default MyFriendsLayout;