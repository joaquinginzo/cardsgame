"use strict";

// CREATE A CARDS GAME.
// CALLED GREATER OR LOWER THAN
// CREATES AN ARRAY OF 40 CARDS IN A RANDOM ORDER ( 40 variables with a "value" to compare with the other cards)
// FIRST VERSION SHOULD ALLOW TWO PLAYERS (create a computer players as well, that chooses bigger if the card is lower than 5 and viceversa.)
// THE FIRST CARD SHOULD BE VISIBLE
// THE FIRST PLAYER IS CHOSEN RANDOMLY
// HE HAS TO DECIDE IF THE NEXT CARD IN THE ARRAY IS GOING TO BE A BIGGER OR A SMALLER CARD ( display the card and buttons to choose the option)
// IF HE IS RIGHT HE WINS A POINT, IF HE IS WRONG HE DOESNT AND THE OTHER PLAYER GOES TO STEP 7
// THE PLAYER WITH MORE POINTS WHEN THE 40 CARDS ARE GONNE IS THE WINNER.
// Steps 
// create a start function
// It will create the array, place the numbers on the divs, create the buttons, display the score and prepare all the functionality for the game.
// QUERIES
var display = document.querySelector(".display");
var main = document.querySelector("main");
var body = document.body;
var nav = document.querySelector("nav");
var command = document.querySelector(".command");
var startBtn = document.querySelector("#start-btn");
var actualCard = document.querySelector(".card-left");
var actualImage = document.querySelector("#img-actual");
var imgToReveal = document.querySelector("#img-toreveal");
var userBtns = document.querySelector(".btn-panel-btn");
var secondCard = document.querySelector(".card-right"); //Event listeners

startBtn.addEventListener("click", startGame);
userBtns.addEventListener("click", revealCard); // Functions

function startGame() {
  //Display and text changes.
  main.style.display = "flex";
  body.style.backgroundColor = "darkgreen";
  nav.innerHTML = "Good luck!";
  setTimeout(function () {
    actualImage.display = "none";
    actualCard.innerHTML = randomNumber;
  }, 2000);
}

function revealCard() {
  imgToReveal.style.visibility = "hidden";
  secondCard.innerHTML = randomNumber2;
  setTimeout(function () {
    actualCard.display = "block";
    actualImage.style.visibility = "visible";
    actualCard.innerHTML = "";
  }, 1000);
}
/*------------------------------------------------------------------------------------------*/
//DECK FUNCTIONALITY.


var newArr = new Array(52);
var randomNumber = Math.floor(Math.random() * newArr.length);
var randomNumber2 = Math.floor(Math.random() * newArr.length); //----------------- DECK FUNCTIONALITY-----------------

var suits = ["spades"];
var ranks = [];