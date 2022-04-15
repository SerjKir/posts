import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Friend = ({id, username}) => {
    const router = useNavigate();

    return (
        <div className="friend">
            <div className="friend__id">{id}</div>
            <Link to={'/posts/friends/' + id} className="friend__userName"> {username}</Link>
            {/*<button>Показать посты</button>*/}
            {/*<button onClick={() => router('/posts/friends/' + id)}>Показать подробности</button>*/}
        </div>
    );
};

export default Friend;