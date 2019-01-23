import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import GameCard from './components/GameCard';
import Nav from './components/Nav';
import Main from './components/Main';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards: cards,
    score: 0
  };

removeCard = id => {
  // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
  const cards = this.state.cards.filter(friend => friend.id !== id);
  // Set this.state.cards equal to the new cards array
  this.setState({ cards });
  this.setState({ score: this.state.score + 1});
};

updateTopScore = score => {
  this.state.topscore < score ? this.setState({ topscore: score}): this.setState({ topscore: this.state.topscore})
};

  render() {
    return (
      <div>
        <Nav 
        score={this.state.score}
        />
        <Header />
        <Main>
          <h1 className="title">Characters:</h1>
          {this.state.cards.map(data =>{
            return(
              <GameCard
                removeCard={this.removeCard}
                key={data.key}
                id={data.id}
                name={data.name}
                image={data.image}
              />
            )
            })}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App;
