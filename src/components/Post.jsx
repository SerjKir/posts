import React from 'react';
import {Link} from "react-router-dom";

const Post = ({title, friend}) => {
    return (
        <div className="post">
            <div>{friend != null ? <Link to={'/posts/friends/' + friend.id}>{friend.name}</Link> : ''}</div>
            <div>{title}</div>
            <button>Открыть пост</button>
        </div>
    );
};

export default Post;