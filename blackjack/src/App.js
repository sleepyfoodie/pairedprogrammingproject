import React, { Component } from 'react';
import './App.css';
import Player from './playerboard';
import Dealer from './dealerbaord';

class App extends Component {
  render() {
    return (
      <div>
        <Dealer />
        <Player />
      </div>
    );
  }
}

export default App;
