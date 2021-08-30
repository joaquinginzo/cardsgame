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
const board = document.querySelector(".board");
const game = document.querySelector(".game")
const welcomeText = document.querySelector(".welcomeText")
const startBtnContainer = document.querySelector(".start--btn-container");
const startBtn = document.querySelector(".start--btn-btn");
const leftCard = document.querySelector(".board--left");
const leftCardBackgroundImg = document.querySelector(".board--left-img");
const rightCardBackgroundImg = document.querySelector(".board--right-img");
const userBtns = document.querySelector(".btn--panel-btn");
const rightCard= document.querySelector(".board--right");



//Event listeners
startBtn.addEventListener("click", startGame);
userBtns.addEventListener("click", revealCard);


// Functions
function startGame(){
    //Display and text changes.
    board.style.display = "flex";
    game.style.backgroundColor = "darkgreen"
    welcomeText.innerHTML= "Good luck!"
    setTimeout(function (){
        leftCardBackgroundImg.display="none";
        leftCard.innerHTML=randomNumber;
    },2000);
}

function revealCard(){
    rightCardBackgroundImg.style.visibility="hidden";
    rightCard.innerHTML=randomNumber2;
    setTimeout(function(){
        leftCardBackgroundImg.display="block"
        actualImage.style.visibility="visible";
        actualCard.innerHTML="" 
    },1000)
    setTimeout(function(){
        
    })
}


/*------------------------------------------------------------------------------------------*/

//DECK FUNCTIONALITY.


const newArr = new Array(52)
const randomNumber = Math.floor(Math.random()*newArr.length)
const randomNumber2 = Math.floor(Math.random()*newArr.length)



//----------------- DECK FUNCTIONALITY-----------------

const suits = ["spades"]
const ranks = []