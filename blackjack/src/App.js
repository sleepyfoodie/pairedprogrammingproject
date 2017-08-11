import React, { Component } from 'react';
import './App.css';
import Player from './playerboard';
import Dealer from './dealerboard';
import Cards from './cards';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Cards />
        {/* <Dealer />
        <Player /> */}
      </div>
    );
  }
}

export default App;