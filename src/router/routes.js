import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Friends from "../pages/Friends";
import FriendInfo from "../components/FriendInfo";

export const routes = [
    {path: "/home" , element: Home, exact: true},
    {path: "/posts" , element: Posts, exact: true},
    {path: "/error" , element: Error, exact: true},
    {path: "/friends" , element: Friends, exact: true},
    {path: "/friends/:id" , element: FriendInfo, exact: true},
];

export const links = [
    {to: "/home", text: "Home"},
    {to: "/posts", text: "Posts"},
    {to: "/error", text: "Error"},
    {to: "/friends", text: "Friends"},
]