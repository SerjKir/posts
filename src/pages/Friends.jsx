import React, {useEffect, useState} from 'react';
import RestApi from "../API/api";
import Friend from "../components/Friend";
import Loader from "../components/Loader/Loader";

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getFriends = async () => {
        const response = await RestApi.getFriends()
        setFriends(response.data)
    }

    useEffect(() => {
        getFriends()
    }, [])

    if (Object.keys(friends).length === 0) {
        return <Loader/>
    }

    return (
        <div className="friends">
            {
                friends.map( friend => <Friend key={friend.id} {...friend}/>)
            }
        </div>
    );
};

export default Friends;