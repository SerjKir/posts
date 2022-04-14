import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Friends from "../pages/Friends";
import FriendInfo from "../components/FriendInfo";

export const routes = [
    {path: "/posts/home" , element: Home, exact: true},
    {path: "/posts/posts" , element: Posts, exact: true},
    {path: "/posts/error" , element: Error, exact: true},
    {path: "/posts/friends" , element: Friends, exact: true},
    {path: "/posts/friends/:id" , element: FriendInfo, exact: true},
];

export const links = [
    {to: "/posts/home", text: "Home"},
    {to: "/posts/posts", text: "Posts"},
    {to: "/posts/error", text: "Error"},
    {to: "/posts/friends", text: "Friends"},
]