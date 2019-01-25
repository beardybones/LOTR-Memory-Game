import React from "react";
import "./style.css";

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="score">
                    <h1>Score:
                        <span>{this.props.score}</span>
                    </h1>
                </div>
                <div className="topscore">
                    <h1>Top Score:
                        <span>{this.props.topscore}</span>
                    </h1>
                </div>
            </nav>
        );
    }
}

export default Nav;