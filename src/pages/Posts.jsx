import React, {useEffect, useState} from 'react';
import RestApi from "../API/api";
import Post from "../components/Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [friends, setFriends] = useState([])

    const getPosts = async () => {
        const response = await RestApi.getPosts()
        setPosts(response.data)
    }

    const getFriends = async () => {
        const response = await RestApi.getFriends()
        setFriends(response.data)
    }

    useEffect(() => {
        getFriends()
        getPosts()
    }, [])

    return (
        <div className="posts">
            {posts.map(post => <Post key={post.id} {...post} friend={friends.find((friend) => friend.id === post.userId)} />)}
        </div>
    );
};

export default Posts;