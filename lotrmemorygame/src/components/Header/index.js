import React from "react";
import "./style.css";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>The Quest for the One Ring</h1>
                <h2>Click on the heroes to earn points, but don't click on any more than once!</h2>
            </header>
        );
    }
}

export default Header;
