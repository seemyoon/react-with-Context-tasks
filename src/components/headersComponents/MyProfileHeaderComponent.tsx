import React from 'react';
import {Link} from "react-router-dom";

const MyProfileHeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to="myCars">My Cars</Link></li>
                <li><Link to="myFriends">My Friends</Link></li>
            </ul>
        </div>
    );
};

export default MyProfileHeaderComponent;
