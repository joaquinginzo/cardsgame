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
const display = document.querySelector(".display");
const command = document.querySelector(".command");
const startBtn = document.querySelector("#start-btn");
const actualCard = document.querySelector(".card-actual");
const actualImage = document.querySelector("#img-actual");


//Event listeners
startBtn.addEventListener("click", startGame);


//Functions
function startGame(){
    //Display buttons
    //Create the deck
    //Display the points (maybe a chart?)
    //Show the first card
    setTimeout(function (){actualImage.src="assets/images/images.png"},500);
}


/*------------------------------------------------------------------------------------------*/

//DECK FUNCTIONALITY.

const generateRandomDeck = () => {
    //Generate the deck
    //Shuffle the deck
    //Return it
}

