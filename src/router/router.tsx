import {createBrowserRouter} from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import RegistrationPage from "../pages/RegistrationPage";
import AuthorizationPage from "../pages/AuthorizationPage";
import MyProfileLayout from "../layouts/MyProfileLayout";
import CarsPage from "../pages/CarsPage";
import MyFriendsLayout from "../layouts/MyFriendsLayout";
import MyFriendsUsersPage from "../pages/myFriendsPage/MyFriendsUsersPage";
import MyFriendsPostsPage from "../pages/myFriendsPage/MyFriendsPostsPage";
import MyFriendsUsersPostsPage from "../components/myfriendscomponent/MyFriendsUsersPostsPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <LoginLayout/>,
        children: [
            {path: "registration", element: <RegistrationPage/>},
            {path: "authorization", element: <AuthorizationPage/>},
        ]
    },
    {
        path: "myProfile", element: <MyProfileLayout/>, children: [
            {path: "myCars", element: <CarsPage/>}]
    },
    {
        path: "myProfile/myFriends", element: <MyFriendsLayout/>, children: [
            {path: "users", element: <MyFriendsUsersPage/>},
            {path: "posts", element: <MyFriendsPostsPage/>},
            {path: "usersPosts", element: <MyFriendsUsersPostsPage/>},
        ]
    }
])