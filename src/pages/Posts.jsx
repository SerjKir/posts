import React, {useEffect, useState} from 'react';
import RestApi from "../API/api";
import Post from "../components/Post";
import Loader from "../components/Loader/Loader";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [friends, setFriends] = useState([])

    const getPosts = async () => {
        const response = await RestApi.getPosts()
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex !== 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        setPosts(shuffle(response.data))
    }

    const getFriends = async () => {
        const response = await RestApi.getFriends()
        setFriends(response.data)
    }

    useEffect(() => {
        getFriends()
        getPosts()
    }, [])

    if (Object.keys(posts).length === 0 || Object.keys(friends).length === 0) {
        return <Loader/>
    }

    return (
        <div className="posts">
            {posts.map(post => <Post key={post.id} {...post} friend={friends.find((friend) => friend.id === post.userId)} />)}
        </div>
    );
};

export default Posts;