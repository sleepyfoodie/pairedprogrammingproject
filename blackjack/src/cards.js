import React, { Component } from 'react';
import aceofclubs from './cards/ace_of_clubs.png';
import aceofdiamonds from './cards/ace_of_diamonds.png';
import aceofhearts from './cards/ace_of_hearts.png';
import aceofspades from './cards/ace_of_spades.png';
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
import { Button } from 'react-materialize'
import './cards.css';

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
                    name: '2_of_clubs',
                    value: 2,
                    image: twoofclubs
                },
                {
                    name: 'two_of_diamonds',
                    value: 2,
                    image: twoofdiamonds
                },
                {
                    name: 'two_of_hearts',
                    value: 2,
                    image: twoofhearts
                },
                {
                    name: 'two_of_spades',
                    value: 2,
                    image: twoofspades
                },
                {
                    name: 'three_of_clubs',
                    value: 3,
                    image: threeofclubs
                },
                {
                    name: 'three_of_diamonds',
                    value: 3,
                    image: threeofdiamonds
                },
                {
                    name: 'three_of_hearts',
                    value: 3,
                    image: threeofhearts
                },
                {
                    name: 'three_of_spades',
                    value: 3,
                    image: threeofspades
                },
                {
                    name: 'fourofclubs',
                    value: 4,
                    image: fourofclubs
                },
                {
                    name: 'fourofdiamonds',
                    value: 4,
                    image: fourofdiamonds
                },
                {
                    name: 'fourofhearts',
                    value: 4,
                    image: fourofhearts
                },
                {
                    name: 'fourofspades',
                    value: 4,
                    image: fourofspades
                },
                {
                    name: 'fiveofclubs',
                    value: 5,
                    image: fiveofclubs
                },
                {
                    name: 'fiveofdiamonds',
                    value: 5,
                    image: fiveofdiamonds
                },
                {
                    name: 'fiveofhearts',
                    value: 5,
                    image: fiveofhearts
                },
                {
                    name: 'fiveofspades',
                    value: 5,
                    image: fiveofspades
                },
                {
                    name: 'sixofclubs',
                    value: 6,
                    image: sixofclubs
                },
                {
                    name: 'sixofdiamonds',
                    value: 6,
                    image: sixofdiamonds
                },
                {
                    name: 'sixofhearts',
                    value: 6,
                    image: sixofhearts
                },
                {
                    name: 'sixofspades',
                    value: 6,
                    image: sixofspades
                },
                {
                    name: 'sevenofclubs',
                    value: 7,
                    image: sevenofclubs
                },
                {
                    name: 'sevenofdiamonds',
                    value: 7,
                    image: sevenofdiamonds
                },
                {
                    name: 'sevenofhearts',
                    value: 7,
                    image: sevenofhearts
                },
                {
                    name: 'sevenofspades',
                    value: 7,
                    image: sevenofspades
                },
                {
                    name: 'eightofclubs',
                    value: 8,
                    image: eightofclubs
                },
                {
                    name: 'eightofdiamonds',
                    value: 8,
                    image: eightofdiamonds
                },
                {
                    name: 'eightofhearts',
                    value: 8,
                    image: eightofhearts
                },
                {
                    name: 'eightofspades',
                    value: 8,
                    image: eightofspades
                },
                {
                    name: "nineofclubs",
                    value: 9,
                    image: nineofclubs
                },
                {
                    name: "nineofdiamonds",
                    value: 9,
                    image: nineofdiamonds
                },
                {
                    name: "nineofhearts",
                    value: 9,
                    image: nineofhearts
                },
                {
                    name: "nineofspades",
                    value: 9,
                    image: nineofspades
                },
                {
                    name: "tenofclubs",
                    value: 10,
                    image: tenofclubs
                },
                {
                    name: "tenofdiamonds",
                    value: 10,
                    image: tenofdiamonds
                },
                {
                    name: "tenofhearts",
                    value: 10,
                    image: tenofhearts
                },
                {
                    name: "tenofspades",
                    value: 10,
                    image: tenofspades
                },
                {
                    name: "aceofclubs",
                    value: 1,
                    image: aceofclubs
                },
                {
                    name: "aceofdiamonds",
                    value: 1,
                    image: aceofdiamonds
                },
                {
                    name: "aceofhearts",
                    value: 1,
                    image: aceofhearts
                },
                {
                    name: "aceofspades",
                    value: 1,
                    image: aceofspades
                },
                {
                    name: "jackofclubs",
                    value: 10,
                    image: jackofclubs
                },
                {
                    name: "jackofdiamonds",
                    value: 10,
                    image: jackofdiamonds
                },
                {
                    name: "jackofhearts",
                    value: 10,
                    image: jackofhearts
                },
                {
                    name: "jackofspades",
                    value: 10,
                    image: jackofspades
                },
                {
                    name: "kingofclubs",
                    value: 10,
                    image: kingofclubs
                },
                {
                    name: "kingofdiamonds",
                    value: 10,
                    image: kingofdiamonds
                },
                {
                    name: "kingofhearts",
                    value: 10,
                    image: kingofhearts
                },
                {
                    name: "kingofspades",
                    value: 10,
                    image: kingofspades
                },
                {
                    name: "queenofclubs",
                    value: 10,
                    image: queenofclubs
                },
                {
                    name: "queenofdiamonds",
                    value: 10,
                    image: queenofdiamonds
                },
                {
                    name: "queenofhearts",
                    value: 10,
                    image: queenofhearts
                },
                {
                    name: "queenofspades",
                    value: 10,
                    image: queenofspades
                }
            ],
            gameStarted: false,
            playersValue: 0,
            dealersValue: 0
        }
        this.startPlay = this.startPlay.bind(this);
        this.playerhit = this.playerhit.bind(this);
        this.dealerhit = this.dealerhit.bind(this);
        this.checkHit = this.checkHit.bind(this);

    }


    playerhit() {
        let playersHand = this.state.playersHand;
        let newPlayDeck = this.state.cards;
        var index = Math.floor((Math.random() * newPlayDeck.length))
        playersHand.push(this.state.deck[index]);
        newPlayDeck.splice(index, 1)
        this.setState({
            cards: newPlayDeck,
            playersHand: playersHand
        })
        let sum = 0
        let value = playersHand.value
        for (var i = 0; i < playersHand.length; i++) {
            if (value === 1) {
                let aceValue = window.confirm("Ace is by default set to 1. Click ok to change to '11' or click cancel to remain at 1")
                if (aceValue === true) {
                    sum += 11
                }
                else {
                    sum += 1
                }
            }
            else {
                sum += playersHand[i].value
            }
            if (sum >= 22) {
                alert("Busted! Dealer's Win!");
                this.setState({
                    gameStarted: false,
                    playersHand: [],
                    dealersHand: [],
                    playersValue: 0,
                    dealersValue: 0
                })
            }
        }
        console.log("player's new total is " + sum);
        //add alert
    }

    dealerhit() {
        if (this.checkHit()) {
            console.log('checkHit is running')
            let sum = 0;
            let dealersHand = this.state.dealersHand;
            let newPlayDeck = this.state.cards;
            var index = Math.floor((Math.random() * newPlayDeck.length))
            dealersHand.push(this.state.deck[index]);
            newPlayDeck.splice(index, 1)
            for (var i = 0; i < dealersHand.length; i++) {
                sum += dealersHand[i].value
                if (sum < 18 && this.state.gameStarted) {
                    this.setState({
                        cards: newPlayDeck,
                        dealersHand: dealersHand
                    })
                }
                console.log('The dealers hand is now at', sum)
            }
            if (sum < 18) {
                this.dealerhit()
            }
            else {
                console.log('checkHit is NOT running, dealer or player wins')
                this.checkHit()
            }
        }
    }

    checkHit() {
        let dealersHand = this.state.dealersHand
        let playersHand = this.state.playersHand
        let result = dealersHand.reduce((acc, el) => acc + el.value, 0)
        if (result > playersHand.reduce((acc, el) => acc + el.value, 0) && result < 22) {
            alert('Dealer wins!');
            this.setState({
                gameStarted: false,
                playersHand: [],
                dealersHand: [],
                playersValue: 0,
                dealersValue: 0
            })
            return false
        }
        else if (result < 18) {
            console.log('dealer`s hand is less than 18')
            // this.dealerhit()
            return true
        }
        else {
            alert("Dealer Busted! Players's Win!");
            this.setState({
                gameStarted: false,
                playersHand: [],
                dealersHand: [],
                playersValue: 0,
                dealersValue: 0
            })
            return false
        }
    }


    startPlay() {
        let playersHand = this.state.playersHand;
        let dealersHand = this.state.dealersHand;
        let tempDeck = this.state.cards;
        //at the start, Player gets 2 cards
        let playerresult = this.state.playersValue;
        for (let i = 0; i < 2; i++) {
            var index = Math.floor((Math.random() * tempDeck.length))
            let value = this.state.deck[index].value;
            playersHand.push(this.state.deck[index]);
            playerresult += value
            //2 cards get spliced out
            tempDeck.splice(index, 1)
        }
        console.log("player's total is " + playerresult)
        this.setState({
            //cards lose 2 from the deck, and players Hand now has 2 cards in the array
            cards: tempDeck,
            playersHand: playersHand,
            playersValue: playerresult
        })
        //dealer now gets 2 cards from the same deck
        let dealtempDeck = tempDeck;
        let total = this.state.dealersValue;
        for (let i = 0; i < 2; i++) {
            let value = this.state.deck[index].value
            dealersHand.push(this.state.deck[index]);
            //calculating sum of dealer's cards
            total += value
            dealtempDeck.splice(index, 1)
        }
        console.log("dealer's total is " + total)
        this.setState({
            dealersHand: dealersHand,
            gameStarted: true,
            dealersValue: total
        })
    };

    render() {
        return (
            <div className="container">
                <div className="dealer">
                    <div id="startButton">
                        <Button
                            onClick={this.startPlay}
                            disabled={(this.state.gameStarted === true) ? true : false}
                            waves='light'>start game</Button>
                    </div>
                    <p>Dealer's Hand</p>
                    {this.state.dealersHand.map((items, i) => {
                        return (
                            <div>
                                <img src={items.image} alt="card" />
                            </div>)
                    })}
                </div>
                <div className="dealer">
                    <p>Player's Hand</p>
                    {this.state.playersHand.map((player, i) => {
                        return (
                            <div>
                                <img src={player.image} alt="player" />
                            </div>)
                    })}

                    <p></p>
                    <Button onClick={this.playerhit} waves='light'> Hit </Button>
                    <p></p>
                    <Button onClick={this.dealerhit} waves='light'> Stay </Button>
                </div>
            </div>
        );
    }
}

export default Cards;

//if dealer total = 17, and ace = 11, then hit, but if ace = 1, then stay
