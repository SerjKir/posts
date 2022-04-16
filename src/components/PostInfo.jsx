import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import RestApi from "../API/api";
import Comments from "./Comments";
import Loader from "./Loader/Loader";
import Post from "./Post";

const PostInfo = () => {
    const params = useParams().id
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})

    const getPost = async (id) => {
        const response = await RestApi.getPost(id)
        setPost(response.data)
    }

    const getComments = async (id) => {
        const response = await RestApi.getPostComments(id)
        setComments(response.data)
    }

    useEffect(() => {
        getPost(params)
        getComments(params)
    }, [])


    if (Object.keys(post).length === 0 || Object.keys(comments).length === 0) {
        return <Loader/>
    }

    return (
        <div className="post__info">
            <Post {...post}/>
            {comments.map(comment => <Comments key={comment.id} {...comment} />)}
        </div>
    );
};

export default PostInfo;