import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Friends from "../pages/Friends";
import FriendInfo from "../components/FriendInfo";
import PostInfo from "../components/PostInfo";

export const routes = [
    {path: "/posts" , element: Home, exact: true},
    {path: "/posts/posts" , element: Posts, exact: true},
    {path: "/posts/posts/:id" , element: PostInfo, exact: true},
    {path: "/posts/error" , element: Error, exact: true},
    {path: "/posts/friends" , element: Friends, exact: true},
    {path: "/posts/friends/:id" , element: FriendInfo, exact: true},
    {path: "/posts/posts/:id/userposts" , element: Posts, exact: true},
];

export const links = [
    {to: "/posts/", text: "Домашняя"},
    {to: "/posts/posts", text: "Посты"},
    {to: "/posts/friends", text: "Друзья"},
]