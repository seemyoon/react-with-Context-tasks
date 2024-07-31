import React from 'react';
import {useMyContext} from "../../context/ContextProvider";

const MyFriendsUsersComponent = () => {
    const {userStore: {allUsers}} = useMyContext()
    return (
        <div>
            {allUsers.map(user => (
                <div key={user.id}>ID:{user.id} NAME:{user.name} USERNAME:{user.username} EMAIL:{user.email}</div>))}
        </div>
    );
};

export default MyFriendsUsersComponent;