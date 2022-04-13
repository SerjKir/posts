import React from 'react';
import {useNavigate} from "react-router-dom";

const Friend = ({id, username}) => {
    const router = useNavigate();

    return (
        <div className="friend">
            <div className="friend__id">{id}</div>
            <div className="friend__userName">{username}</div>
            <button onClick={() => router('/friends/' + id)}>Показать подробности</button>
        </div>
    );
};

export default Friend;