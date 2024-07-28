import React from 'react';
import MyProfileHeaderComponent from "../components/headersComponents/MyProfileHeaderComponent";
import {Outlet} from "react-router-dom";

const MyProfileLayout = () => {
    return (
        <div>
            <MyProfileHeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MyProfileLayout;