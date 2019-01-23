import React from "react";
import "./style.css";

class Header extends React.Component {
    render() {
        return (
            <header class="header">
                <h1>Memory Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
        );
    }
}

export default Header;
