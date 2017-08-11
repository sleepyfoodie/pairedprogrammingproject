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
                    value: 2
                },
                {
                    name: 'twoofdiamonds',
                    value: 2
                },
                {
                    name: 'twoofhearts',
                    value: 2
                },
                {
                    name: 'twoofspades',
                    value: 2
                },
                {
                    name: 'threeofclubs',
                    value: 3
                },
                {
                    name: 'threeofdiamonds',
                    value: 3
                },
                {
                    name: 'threeofhearts',
                    value: 3
                },
                {
                    name: 'threeofspades',
                    value: 3
                },
                {
                    name: 'fourofclubs',
                    value: 4
                },
                {
                    name: 'fourofdiamonds',
                    value: 4
                },
                {
                    name: 'fourofhearts',
                    value: 4
                },
                {
                    name: 'fourofspades',
                    value: 4
                },
                {
                    name: 'fiveofclubs',
                    value: 5
                },
                {
                    name: 'fiveofdiamonds',
                    value: 5
                },
                {
                    name: 'fiveofhearts',
                    value: 5
                },
                {
                    name: 'fiveofspades',
                    value: 5
                },
                {
                    name: 'sixofclubs',
                    value: 6
                },
                {
                    name: 'sixofdiamonds',
                    value: 6
                },
                {
                    name: 'sixofhearts',
                    value: 6
                },
                {
                    name: 'sixofspades',
                    value: 6
                },
                {
                    name: 'sevenofclubs',
                    value: 7
                },
                {
                    name: 'sevenofdiamonds',
                    value: 7
                },
                {
                    name: 'sevenofhearts',
                    value: 7
                },
                {
                    name: 'sevenofspades',
                    value: 7
                },
                {
                    name: 'eightofclubs',
                    value: 8
                },
                {
                    name: 'eightofdiamonds',
                    value: 8
                },
                {
                    name: 'eightofhearts',
                    value: 8
                },
                {
                    name: 'eightofspades',
                    value: 8
                },
                {
                    name: "nineofclubs",
                    value: 9
                },
                {
                    name: "nineofdiamonds",
                    value: 9
                },
                {   
                    name: "nineofhearts",
                    value: 9
                },
                {
                    name: "nineofspades",
                    value: 9
                },
                {
                    name: "tenofclubs",
                    value: 10
                },
                {
                    name: "tenofdiamonds",
                    value: 10
                },
                {
                    name: "tenofhearts",
                    value: 10
                },
                {
                    name: "tenofspades",
                    value: 10
                },
                {
                    name: "aceofclubs",
                    value: 1
                },
                {
                    name: "aceofdiamonds",
                    value: 1
                },
                {
                    name: "aceofhearts",
                    value: 1
                },
                {
                    name: "aceofspades",
                    value: 1
                },
                {
                    name: "jackofclubs",
                    value: 10
                },
                {
                    name: "jackofdiamonds",
                    value: 10
                },
                {   
                    name: "jackofhearts",
                    value: 10
                },
                {   
                    name: "jackofspades",
                    value: 10
                },
                {
                    name: "kingofclubs",
                    value: 10
                },
                {
                    name: "kingofdiamonds",
                    value: 10
                },
                {
                    name: "kingofhearts",
                    value: 10
                },
                {
                    name: "kingofspades",
                    value: 10
                },
                {
                    name: "queenofclubs",
                    value: 10
                },
                {
                    name: "queenofdiamonds",
                    value: 10
                },
                {
                    name: "queenofhearts",
                    value: 10
                },
                {
                    name: "queenofspades",
                    value: 10
                }
            ]
        }
        // this.cardDealPlayer = this.cardDealPlayer.bind(this);
        // this.cardDealDealer = this.cardDealDealer.bind(this);
        this.startPlay = this.startPlay.bind(this);
        
    }
    

    playerhit() {

    }
        

    startPlay() {
        let playersHand = this.state.playersHand;
        let dealersHand = this.state.dealersHand;
        let tempDeck = this.state.cards;
    //at the start, Player gets 2 cards
        for (let i = 0; i < 2; i++) {
            var index = Math.floor((Math.random() * tempDeck.length))
            playersHand.push(this.state.deck[index].name);
            //2 cards get spliced out
            tempDeck.splice(index, 1)
        }
        this.setState({
            //cards lose 2 from the deck, and players Hand now has 2 cards in the array
            cards: tempDeck,
            playersHand: playersHand
        })
        //dealer now gets 2 cards from the same deck
        let tempDeck = this.state.cards;
        for (let i = 0; i < 2; i++) {
            var index = Math.floor((Math.random() * tempDeck.length))
            let sum = 0
            dealersHand.push(this.state.deck[index].name);
            //calculating sum of dealer's cards
            sum += this.state.deck[index].value
            tempDeck.splice(index, 1)
        }
        dealersHand.push(this.state.deck[index].name);
        this.setState({
            dealersHand: dealersHand
        })
        //dealer has to draw again if sum is less than 17, and the process repeats...? But how do you know when to stop drawing??
        if(sum < 18) {
            let tempDeck = this.state.cards;
            var index = Math.floor((Math.random() * tempDeck.length))
            dealersHand.push(this.state.deck[index].name);
            tempDeck.splice(index,1)
        }
    };


    // cardDealDealer() {
    //     let dealersHand = this.state.dealersHand;
    //     let tempDeck = this.state.cards;

    //     for (let i = 0; i < 2; i++) {
    //         var index = Math.floor((Math.random() * this.state.cards.length))

    //         dealersHand.push(tempDeck[index]);
    //         tempDeck.splice(index, 1)
    //     }

    //     this.setState({
    //         cards: tempDeck,
    //         dealersHand: dealersHand
    //     })
    // };


    render() {
        console.log(this.state.cards)
        console.log(this.state.dealersHand)

        return (
            <div>
                <button onClick={this.startPlay}>start game</button>
                {this.state.deck.map((items, i) => <Map index={i} card={items.name} /> )}
                {/* <img src={twoofclubs} alt="card"/> */}
                <p></p>
                <button> Hit </button>
                <p></p>
                <button> Stay </button>
            </div>
        );
    }
}

export default Cards;

class Map extends Component {
    render() {
        return(
            //map function not working properly, need to ask for help tomorrow
            <img src={this.props.card} />
        )
    }
}




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