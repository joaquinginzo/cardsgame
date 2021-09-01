"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// QUERIES
var board = document.querySelector(".board");
var game = document.querySelector(".game");
var welcomeText = document.querySelector(".welcomeText");
var startBtnContainer = document.querySelector(".start--btn-container");
var startBtn = document.querySelector(".start--btn-btn");
var leftCard = document.querySelector(".board--left");
var leftCardBackgroundImg = document.querySelector(".board--left-img");
var higherBtn = document.querySelector(".higher--btn");
var lowerBtn = document.querySelector(".lower--btn");
var score = document.querySelector(".score--number");
var maxDeckPosition = 52;
var deckPosition = 1;

var startGame = function startGame() {
  game.style.backgroundColor = "darkgreen";
  welcomeText.innerHTML = "Good luck!";
  leftCardBackgroundImg.display = "none";
  leftCard.innerHTML = Object.values(myShuffledDeck[0]);
}; // const assignColor = (card) => {
//     card.suit === "♣" || card.suit === "♠" ? card.color = "red" : card.color = "black";
// }


var createDeck = function createDeck() {
  newDeck = [];
  var suits = ["♠", "♣", "♥", "♥"];
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  for (var suit in suits) {
    for (var rank in ranks) {
      newDeck.push({
        "rank": ranks[rank],
        "suits": suits[suit]
      });
    }
  } // newDeck.map(card => {
  //     assignColor(...card)  
  // }); 


  return newDeck;
};

var ranksValues = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14
};

var colorValues = _defineProperty({
  "♠": "black",
  "♣": "black",
  "♥": "red"
}, "\u2665", "red");

var shuffleDeck = function shuffleDeck(newDeck) {
  for (var i = newDeck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = newDeck[i];
    newDeck[i] = newDeck[j];
    newDeck[j] = temp;
  }

  return newDeck;
};

var isHigher = function isHigher() {
  var secondCard = myShuffledDeck[deckPosition];

  if (ranksValues[secondCard.rank] > ranksValues[firstCard.rank]) {
    score.innerHTML++;
  } else {
    score.innerHTML--;
  }

  leftCard.innerHTML = Object.values(secondCard);
  firstCard = secondCard;
  deckPosition++;
};

var isLower = function isLower() {
  var secondCard = myShuffledDeck[deckPosition];

  if (ranksValues[secondCard.rank] < ranksValues[firstCard.rank]) {
    score.innerHTML++;
  } else {
    score.innerHTML--;
  }

  leftCard.innerHTML = Object.values(secondCard);
  firstCard = secondCard;
  deckPosition++;
};

startBtn.addEventListener("click", startGame);
higherBtn.addEventListener("click", isHigher);
lowerBtn.addEventListener("click", isLower);
var myShuffledDeck = shuffleDeck(createDeck());
var firstCard = Object.values(myShuffledDeck[0]);