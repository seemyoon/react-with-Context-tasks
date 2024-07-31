import React, {useEffect, useMemo, useState} from 'react';
import {IUserWithPostFriendType} from "../../models/myFriendModel/IUserWithPostFriendType";
import {useMyContext} from "../../context/ContextProvider";


const MyFriendsUsersPostsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useMyContext()
    const [userWithPostsState, setUserWithPostsState] = useState<IUserWithPostFriendType[]>([])
    const userWithPostsArray = useMemo(() => {
        return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            }
        )
    }, [allUsers, allPosts]);
    useEffect(() => {
        setUserWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);

    return (
        <div>
            {
                userWithPostsState.map(user => <div key={user.id}>
                    <div>{user.username}</div>
                    <ul>
                        {
                            user.posts.map(post => <li key={post.id}>{post.title}</li>)
                        }

                    </ul>
                </div>)
            }
        </div>
    );
};

export default MyFriendsUsersPostsComponent;