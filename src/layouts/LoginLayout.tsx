import React from 'react';
import HeaderComponent from "../components/headersComponents/HeaderComponent";
import {Outlet} from "react-router-dom";

const LoginLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;