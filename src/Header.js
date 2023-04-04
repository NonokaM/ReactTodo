import React from "react";
import "./Header.css";
import logo from "./images/React-image.png"

const Header = () => {
    return (
        <div>
            <header>
                <img src={logo} />
                <h2>TodoList</h2>
            </header>
        </div>
    )
};

export default Header;
