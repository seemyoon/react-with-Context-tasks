import React from 'react';
import {Outlet} from "react-router-dom";
import MyFriendsHeaderComponent from "../components/headersComponents/MyFriendsHeaderComponent";

const MyFriendsLayout = () => {
    return (
        <div>
            <MyFriendsHeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MyFriendsLayout;