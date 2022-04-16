import React, {useEffect, useState} from 'react';
import RestApi from "../API/api";
import Post from "../components/Post";
import Loader from "../components/Loader/Loader";
import {useNavigate, useParams} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [friends, setFriends] = useState([])
    const [location, setLocation] = useState('')

    if (location !== window.location.pathname) {
        setLocation(window.location.pathname)
    }

    const params = useParams().id

    const getPosts = async () => {
        const response = await RestApi.getPosts()
        setPosts(response.data)
    }

    const getPostsUser = async (id) => {
        const response = await RestApi.getPostsUser(id)
        setPosts(response.data)
    }

    const getFriends = async () => {
        const response = await RestApi.getFriends()
        setFriends(response.data)
    }

    const router = useNavigate()

    useEffect(() => {
        getFriends()
        if (location.indexOf('userposts') === -1) {
            getPosts()
        }
        else {
            getPostsUser(params)
        }
        setLocation(window.location.pathname)
    }, [location])

    if (Object.keys(posts).length === 0 || Object.keys(friends).length === 0) {
        return <Loader/>
    }

    return (
        <div className="posts">
            {posts.map(post =>
                <div className="post__item" key={post.id}>
                    <Post {...post} friend={friends.find((friend) => friend.id === post.userId)} />
                    <button onClick={() => router('/posts/posts/' + post.id)}>Открыть комментарии</button>
                </div>)}
        </div>
    );
};

export default Posts;