import React from 'react';

const Comments = ({name, email, body}) => {
    return (
        <div className="comment">
            <div><strong>Title</strong> - {name}</div>
            <div><strong>Email</strong> - {email}</div>
            <div><strong>Text</strong> - {body}</div>
        </div>
    );
};

export default Comments;