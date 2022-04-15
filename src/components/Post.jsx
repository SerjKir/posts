import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Post = ({id, title, body, friend}) => {

    const router = useNavigate()

    return (
        <div className="post">
            <div>{friend != null ? <div><strong>Author</strong> - <Link to={'/posts/friends/' + friend.id}>{friend.name}</Link></div> : ''}</div>
            <div><strong>Title</strong> - {title}</div>
            <div><strong>Text</strong> {body}</div>
            <button onClick={() => router('/posts/posts/' + id)}>Открыть комментарии</button>
        </div>
    );
};

export default Post;