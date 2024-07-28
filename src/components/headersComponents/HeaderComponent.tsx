import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <ul>
            <li><Link to={"/registration"}>Registration</Link></li>
            <li><Link to={"/authorization"}>Authorization</Link></li>
            <li><Link to={"/myProfile"}>My profile</Link></li>
        </ul>
    );
};

export default HeaderComponent;