import React from 'react';
import {Link} from "react-router-dom";

const MyFriendsHeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={"users"}>My friends profile</Link></li>
                <li><Link to={"posts"}>My friends posts</Link></li>
                <li><Link to={"usersPosts"}>My friends profile with posts</Link></li>
            </ul>
        </div>
    );
};

export default MyFriendsHeaderComponent;