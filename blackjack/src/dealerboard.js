import React, { Component } from 'react';
import Cards from './cards';
import './App.css'

class Dealer extends Component {
  render() {
    return (
      <div>
    <dealerbbox className="dealer">
     Dealer's Hand:
     </dealerbbox>
      </div>
    );
  }
}

export default Dealer;
