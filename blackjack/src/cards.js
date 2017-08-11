import React, { Component } from 'react';
import twoofclubs from './cards/2_of_clubs.png';
import twoofdiamonds from './cards/2_of_diamonds.png';
import twoofhearts from './cards/2_of_hearts.png';
import twoofspades from './cards/2_of_spades.png';
import threeofclubs from './cards/3_of_clubs.png';
import threeofdiamonds from './cards/3_of_diamonds.png';
import threeofhearts from './cards/3_of_hearts.png';
import threeofspades from './cards/3_of_spades.png';
import fourofclubs from './cards/4_of_spades.png';
import fourofdiamonds from './cards/4_of_diamonds.png';
import fourofhearts from './cards/4_of_hearts.png';
import fourofspades from './cards/4_of_spades.png';
import fiveofclubs from './cards/5_of_clubs.png';
import fiveofdiamonds from './cards/5_of_diamonds.png';
import fiveofhearts from './cards/5_of_hearts.png';
import fiveofspades from './cards/5_of_spades.png';
import sixofclubs from './cards/6_of_clubs.png';
import sixofdiamonds from './cards/6_of_diamonds.png';
import sixofhearts from './cards/6_of_hearts.png';
import sixofspades from './cards/6_of_spades.png';
import sevenofclubs from './cards/7_of_clubs.png';
import sevenofdiamonds from './cards/7_of_diamonds.png';
import sevenofhearts from './cards/7_of_hearts.png';
import sevenofspades from './cards/7_of_spades.png';
import eightofclubs from './cards/8_of_clubs.png';
import eightofdiamonds from './cards/8_of_diamonds.png';
import eightofhearts from './cards/8_of_hearts.png';
import eightofspades from './cards/8_of_spades.png';
import nineofclubs from './cards/9_of_clubs.png';
import nineofdiamonds from './cards/9_of_diamonds.png';
import nineofhearts from './cards/9_of_hearts.png';
import nineofspades from './cards/9_of_spades.png';
import tenofclubs from './cards/10_of_clubs.png';
import tenofdiamonds from './cards/10_of_diamonds.png';
import tenofhearts from './cards/10_of_hearts.png';
import tenofspades from './cards/10_of_spades.png';
import jackofclubs from './cards/jack_of_clubs.png';
import jackofdiamonds from './cards/jack_of_diamonds.png';
import jackofhearts from './cards/jack_of_hearts.png';
import jackofspades from './cards/jack_of_spades.png';
import kingofclubs from './cards/king_of_clubs.png';
import kingofdiamonds from './cards/king_of_diamonds.png';
import kingofhearts from './cards/king_of_hearts.png';
import kingofspades from './cards/king_of_spades.png';
import queenofclubs from './cards/queen_of_clubs.png';
import queenofdiamonds from './cards/queen_of_diamonds.png';
import queenofhearts from './cards/queen_of_hearts.png';
import queenofspades from './cards/queen_of_spades.png';

class Cards extends Component {

    constructor() {
        super()
        this.state = {
            cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
            playersHand: [],
            dealersHand: [],
            deck: [
                {
                    name: 'twoofclubs',
                    value: 2,
                    image: '/cards/2_of_clubs.png'
                },
                {
                    name: 'twoofdiamonds',
                    value: 2,
                    image: '/cards/2_of_diamonds.png'
                },
                {
                    name: 'twoofhearts',
                    value: 2,
                    image: '/cards/2_of_hearts.png'
                },
                {
                    name: 'twoofspades',
                    value: 2,
                    image: '/cards/2_of_spades.png'
                },
                {
                    name: 'threeofclubs',
                    value: 3,
                    image: '/cards/3_of_clubs.png'
                },
                {
                    name: 'threeofdiamonds',
                    value: 3,
                    image: '/cards/3_of_diamonds.png'
                },
                {
                    name: 'threeofhearts',
                    value: 3,
                    image: '/cards/3_of_hearts.png'
                },
                {
                    name: 'threeofspades',
                    value: 3,
                    image: '/cards/3_of_spades.png'
                },
                {
                    name: 'fourofclubs',
                    value: 4,
                    image: '/cards/4_of_clubs.png'
                },
                {
                    name: 'fourofdiamonds',
                    value: 4,
                    image: '/cards/4_of_diamonds.png'
                },
                {
                    name: 'fourofhearts',
                    value: 4,
                    image: '/cards/4_of_hearts.png'
                },
                {
                    name: 'fourofspades',
                    value: 4,
                    image: '/cards/4_of_spades.png'
                },
                {
                    name: 'fiveofclubs',
                    value: 5,
                    image: '/cards/5_of_clubs.png'
                },
                {
                    name: 'fiveofdiamonds',
                    value: 5,
                    image: '/cards/5_of_diamonds.png'
                },
                {
                    name: 'fiveofhearts',
                    value: 5,
                    image: '/cards/5_of_hearts.png',
                },
                {
                    name: 'fiveofspades',
                    value: 5,
                    image: '/cards/5_of_spades.png',
                },
                {
                    name: 'sixofclubs',
                    value: 6,
                    image: '/cards/6_of_clubs.png',
                },
                {
                    name: 'sixofdiamonds',
                    value: 6,
                    image: '/cards/6_of_diamonds.png',
                },
                {
                    name: 'sixofhearts',
                    value: 6,
                    image: '/cards/6_of_hearts.png',
                },
                {
                    name: 'sixofspades',
                    value: 6,
                    image: '/cards/6_of_spades.png',
                },
                {
                    name: 'sevenofclubs',
                    value: 7,
                    image: '/cards/7_of_clubs.png',
                },
                {
                    name: 'sevenofdiamonds',
                    value: 7,
                    image: '/cards/7_of_diamonds.png',
                },
                {
                    name: 'sevenofhearts',
                    value: 7,
                    image: '/cards/7_of_hearts.png',
                },
                {
                    name: 'sevenofspades',
                    value: 7,
                    image: '/cards/7_of_spades.png',
                },
                {
                    name: 'eightofclubs',
                    value: 8,
                    image: '/cards/8_of_clubs.png',
                },
                {
                    name: 'eightofdiamonds',
                    value: 8,
                    image: '/cards/8_of_diamonds.png',
                },
                {
                    name: 'eightofhearts',
                    value: 8,
                    image: '/cards/8_of_hearts.png',
                },
                {
                    name: 'eightofspades',
                    value: 8,
                    image: '/cards/8_of_spades.png',
                },
                {
                    name: "nineofclubs",
                    value: 9,
                    image: "/cards/9_of_clubs.png"
                },
                {
                    name: "nineofdiamonds",
                    value: 9,
                    image: "/cards/9_of_diamonds.png"
                },
                {   
                    name: "nineofhearts",
                    value: 9,
                    image: "/cards/9_of_hearts.png"
                },
                {
                    name: "nineofspades",
                    value: 9,
                    image: "/cards/9_of_spades.png"
                },
                {
                    name: "tenofclubs",
                    value: 10,
                    image: "/cards/10_of_clubs.png"
                },
                {
                    name: "tenofdiamonds",
                    value: 10,
                    image: "/cards/10_of_diamonds.png"
                },
                {
                    name: "tenofhearts",
                    value: 10,
                    image: "/cards/10_of_hearts.png"
                },
                {
                    name: "tenofspades",
                    value: 10,
                    image: "/cards/10_of_spades.png"
                },
                {
                    name: "aceofclubs",
                    value: 1,
                    image: "/cards/ace_of_clubs.png"
                },
                {
                    name: "aceofdiamonds",
                    value: 1,
                    image: "/cards/ace_of_diamonds.png"
                },
                {
                    name: "aceofhearts",
                    value: 1,
                    image: "/cards/ace_of_hearts.png"
                },
                {
                    name: "aceofspades",
                    value: 1,
                    image: "/cards/ace_of_spades.png"
                },
                {
                    name: "jackofclubs",
                    value: 10,
                    image: "/cards/jack_of_clubs.png"
                },
                {
                    name: "jackofdiamonds",
                    value: 10,
                    image: "/cards/jack_of_diamonds.png"
                },
                {   
                    name: "jackofhearts",
                    value: 10,
                    image: "/cards/jack_of_hearts.png"
                },
                {   
                    name: "jackofspades",
                    value: 10,
                    image: "cards/jack_of_spades.png"
                },
                {
                    name: "kingofclubs",
                    value: 10,
                    image: "/cards/king_of_clubs.png"
                },
                {
                    name: "kingofdiamonds",
                    value: 10,
                    image: "/cards/king_of_diamonds.png"
                },
                {
                    name: "kingofhearts",
                    value: 10,
                    image: "/cards/king_of_hearts.png"
                },
                {
                    name: "kingofspades",
                    value: 10,
                    image: "/cards/king_of_spades.png"
                },
                {
                    name: "queenofclubs",
                    value: 10,
                    image: "/cards/queen_of_clubs.png",
                },
                {
                    name: "queenofdiamonds",
                    value: 10,
                    image: "/cards/queen_of_diamonds.png"
                },
                {
                    name: "queenofhearts",
                    value: 10,
                    image: "/cards/queen_of_hearts.png"
                },
                {
                    name: "queenofspades",
                    value: 10,
                    image: "/cards/queen_of_spades/png"
                }
            ]
        }
        this.cardDealPlayer = this.cardDealPlayer.bind(this);
        this.cardDealDealer = this.cardDealDealer.bind(this);

    }

    playerhit() {

    }

    cardDealPlayer() {
        let playersHand = this.state.playersHand;
        let tempDeck = this.state.cards;

        for (let i = 0; i < 2; i++) {
            var index = Math.floor((Math.random() * tempDeck.length))

            playersHand.push(tempDeck[index]);
            tempDeck.splice(index, 1)
        }

        this.setState({
            cards: tempDeck,
            playersHand: playersHand
        })
    };


    cardDealDealer() {
        let dealersHand = this.state.dealersHand;
        let tempDeck = this.state.cards;

        for (let i = 0; i < 2; i++) {
            var index = Math.floor((Math.random() * this.state.cards.length))

            dealersHand.push(tempDeck[index]);
            tempDeck.splice(index, 1)
        }

        this.setState({
            cards: tempDeck,
            dealersHand: dealersHand
        })
    };


    render() {

        return (
            <div>
                <img src={this.state.deck[0].name} alt="card"/>
                <button> Hit </button>
                <button> Stay </button>
            </div>
        );
    }
}

export default Cards;




/* cardDealDealer(){

 for (let i = 0; i<2; i++){
     var index = Math.floor((Math.random() * this.state.cards.length))
     if(index == this.state.cards.length +1){
        index = Math.floor((Math.random() * this.state.cards.length))
     }
     else{
     dealersHand.push(this.state.deck[index]);
     this.state.cards.splice(i,1)
     }
 }
 };*/