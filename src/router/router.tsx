import {createBrowserRouter} from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import RegistrationPage from "../pages/RegistrationPage";
import AuthorizationPage from "../pages/AuthorizationPage";
import MyProfileLayout from "../layouts/MyProfileLayout";
import CarsPage from "../pages/CarsPage";
import PostsPage from "../pages/PostsPage";

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
            {path: "myCars", element: <CarsPage/>},
            {path: "myPosts", element: <PostsPage/>},]
    }
])