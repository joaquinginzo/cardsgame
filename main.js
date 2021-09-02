// QUERIES
const board = document.querySelector(".board");
const game = document.querySelector(".game");
const welcomeText = document.querySelector(".welcomeText");
const startBtnContainer = document.querySelector(".start--btn-container");
const startBtn = document.querySelector(".start--btn-btn");
const leftCard = document.querySelector(".board--left");
const leftCardBackgroundImg = document.querySelector(".board--left-img");
const higherBtn = document.querySelector(".higher--btn");
const lowerBtn = document.querySelector(".lower--btn");
let score = document.querySelector(".score--number");

const maxDeckPosition = 52;
let deckPosition = 1;

const startGame = () => {
    game.style.backgroundColor = "darkgreen";
    welcomeText.innerHTML= "Good luck!";
    leftCardBackgroundImg.display= "none";
    leftCard.innerHTML = Object.values(myShuffledDeck[0]);
}

// const assignColor = (card) => {
//     card.suit === "♣" || card.suit === "♠" ? card.color = "red" : card.color = "black";
// }
const createDeck = () => {
    newDeck = []
    const suits = ["♠", "♣", "♥", "♥"];
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    for (let suit in suits) {
        for (let rank in ranks){
            newDeck.push({"rank":ranks[rank],"suits":suits[suit]})
        }  
    }
    // newDeck.map(card => {
    //     assignColor(...card)  
    // }); 
    return newDeck
}

const ranksValues = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14
}

const colorValues = {
    "♠":"black",
    "♣":"black",
    "♥":"red",
    "♥":"red"
}

const shuffleDeck = (newDeck) => {
    for (let i = newDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = newDeck[i];
        newDeck[i] = newDeck[j];
        newDeck[j] = temp;
    }
    return newDeck
}

const isHigher = () => {
    let secondCard = myShuffledDeck[deckPosition];
    if (ranksValues[secondCard.rank] > ranksValues[firstCard.rank]) {
        score.innerHTML ++;
    } else {
        score.innerHTML --;
    }
    leftCard.innerHTML = Object.values(secondCard);
        firstCard = secondCard;
        deckPosition++;
}

const isLower = () => {
    let secondCard = myShuffledDeck[deckPosition];
    if (ranksValues[secondCard.rank] < ranksValues[firstCard.rank]) {
        score.innerHTML ++;
    } else {
        score.innerHTML --;
    }
    leftCard.innerHTML = Object.values(secondCard);
        firstCard = secondCard;
        deckPosition++;

}

startBtn.addEventListener("click", startGame);
higherBtn.addEventListener("click", isHigher);
lowerBtn.addEventListener("click",isLower)
let myShuffledDeck = shuffleDeck(createDeck())
let firstCard = Object.values(myShuffledDeck[0])

