import React, {useEffect, useState} from 'react';
import RestApi from "../API/api";
import {useParams} from "react-router-dom";
import Loader from "./Loader/Loader";

const FriendInfo = () => {
    const params = useParams().id
    const [friendInfo, setFriendInfo] = useState({})
    const getFriendInfo = async (id) => {
        const response = await RestApi.getFriendInfo(id)
        setFriendInfo(response.data)
    }

    useEffect(() => {
        getFriendInfo(params)
    }, [])

    if (Object.keys(friendInfo).length === 0) {
        return <Loader/>
    }


    return (
        <div className="friend__info">
            <div className="friend__userName">{friendInfo.username}</div>
            <div className="friend__name">{friendInfo.name}</div>
            <div className="friend__email">{friendInfo.email}</div>
            <div className="friend__phone">{friendInfo.phone}</div>
        </div>
    );
};

export default FriendInfo;