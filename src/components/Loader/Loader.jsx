import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <span className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </span>
    );
};

export default Loader;