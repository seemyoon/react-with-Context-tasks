import React from 'react';
import {useMyContext} from "../../context/ContextProvider";

const MyFriendsPostsComponent = () => {
    const {postStore: {allPosts}} = useMyContext();
    return (
        <div>
            {allPosts.map(post => (
                <div key={post.id}>ID:{post.id} BODY:{post.body} TITLE:{post.title} USER ID:{post.userId}</div>))}
        </div>
    );
};

export default MyFriendsPostsComponent;