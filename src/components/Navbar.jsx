import React from 'react';
import {NavLink} from "react-router-dom";
import {links} from "../router/routes";

const Navbar = () => {
    return (
        <nav className="navbar">
            {links.map( link => <NavLink key={link.to} to={link.to} className={({isActive}) => (isActive ? 'link-active' : 'link')} >{link.text}</NavLink> )}
        </nav>
    );
};

export default Navbar;