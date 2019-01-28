import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Footer from './components/Footer';
import Header from './components/Header';
import GameCard from './components/GameCard';
import Nav from './components/Nav';
import Main from './components/Main';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards: cards,
    score: 0,
    topscore: 0,
    shake: false,
    gameover: ""
  };


  updateScore = id => {
    const filtered = this.state.cards.filter(data => data.id === id);
    if (filtered.length > 0) {
      if (filtered[0].clicked) {
        this.shakePicture();
        this.setState({ gameover: "One Does Not Simply Walk Into Mordor!" });
        this.updateTopScore(this.state.score);
        this.newGame();
      } else {
        filtered[0].clicked = true;
        this.setState({ score: this.state.score + 1 });
        this.randomizeBoard();
      }
    }
  }

  updateTopScore = score => {
    this.state.topscore < score ? this.setState({ topscore: score }) : this.setState({ topscore: this.state.topscore })
  };

  shakePicture() {
    this.setState({ shake: !this.state.shake });
    console.log("shake activated");

  }

  newGame() {
    let cards = this.state.cards.map(data => {
      data.clicked = false
      return data;
    })

    
    this.setState({ 
      score: 0,
      cards: cards,
      gameover: "",
    });
    this.shakePicture();
  }

  randomizeBoard = (id) => {
    let sourceArray = this.state.cards
    for (let i = 0; i < sourceArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (sourceArray.length - i));
      let temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    this.setState({ cards: sourceArray });
  }

  render() {
    return (
      <div className="lotrcard">
        <Nav
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Header Characters/>
        <Main>
            {this.state.cards.map(data => {
              return (
                <div>
                  <GameCard
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    image={data.image}
                    updateScore={this.updateScore}
                    shake={this.state.shake}
                  />
                </div>
              )})}
        </Main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;
