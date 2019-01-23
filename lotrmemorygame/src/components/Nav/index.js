import React from "react";
import "./style.css";

class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <div className="score">
                <span>Score:
                    <span>{this.props.score}</span>
                </span>
                </div>
            </nav>
        );
    }
}

export default Nav;