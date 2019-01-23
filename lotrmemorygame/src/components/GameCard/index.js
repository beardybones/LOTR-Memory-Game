import React from "react";
import "./style.css";

class GameCard extends React.Component {
    render() {
        return (
            <div class="GameCard" onClick={() => this.props.removeCard(this.props.id)}>
                <img alt={this.props.name} src={this.props.image} />
            </div>
        );
    }
}

export default GameCard;
