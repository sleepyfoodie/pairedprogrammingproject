import React, { Component } from 'react';
import Cards from './cards';
import './App.css';

class Player extends Component {
  render() {
    return (
      <div>
          <playerbox className="player">
     Player's Hand:
        </playerbox>
      </div>
    );
  }
}

export default Player;
