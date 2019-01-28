import React from "react";
import "./style.css";

class GameCard extends React.Component {
    render() {
        return (
            <div className="GameCard" onClick={() => this.props.updateScore(this.props.id)}>
                <img className="responsive-img" alt={this.props.name} src={this.props.image} />
            </div>
        );
    }
}

export default GameCard;
