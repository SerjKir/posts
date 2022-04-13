import React, {useEffect, useState} from 'react';
import RestApi from "../API/api";
import Friend from "../components/Friend";

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getFriendsData = async () => {
        const response = await RestApi.getFriends()
        setFriends(response.data)
    }

    useEffect(() => {
        getFriendsData()
    })

    return (
        <div className="friends">
            {
                friends.map( friend => <Friend key={friend.id} {...friend}/>)
            }
        </div>
    );
};

export default Friends;