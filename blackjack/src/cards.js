import React, { Component } from 'react';


class Cards extends Component {
  constructor(){
    super()
    this.state = {
       deck: {
         twoclub: {
           path: "/cards/2_of_clubs.png",
           suit: "club",
           value: 2
         },
          twodiamond:{
            path: "/cards/2_of_diamonds.png",
            suit: "diamond",
            value: 2
          }
       }
    }
  }
  render() {
    return (
      <div>
        <img src="{this.state.deck.twoclub.path}"/>

      </div>
    );
  }
}

export default Cards;




//Cards loop

