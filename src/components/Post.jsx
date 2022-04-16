import React from 'react';
import {Link} from "react-router-dom";

const Post = ({title, body, friend}) => {
    return (
        <div className="post">
            <div>{friend != null ? <div><strong>Author</strong> - <Link to={'/posts/friends/' + friend.id}>{friend.name}</Link></div> : ''}</div>
            <div><strong>Title</strong> - {title}</div>
            <div><strong>Text</strong> {body}</div>
        </div>
    );
};

export default Post;