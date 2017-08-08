import React, { Component } from 'react';
import './App.css';
import Player from './playerboard';
import Dealer from './dealerboard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> This is our amazing blackjack project. </h1>
        <Dealer />
        <Player />
      </div>
    );
  }
}

export default App;