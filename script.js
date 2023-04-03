// Music and SFX
const backgroundMusic = new Audio("Synthwave.mp3");
const winningMusicOne = new Audio("victory.mp3");
const winningMusicTwo = new Audio("drum.mp3");
const toggleMusicOn = document.querySelector(".toggleMusicOn");
const toggleMusicOff = document.querySelector(".toggleMusicOff");
toggleMusicOff.style.display = "none";
// ********************************************************************************************************************************


// *** Function that toggles the background music ***
const toggleBackgroundMusic = function () {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicOff.style.display = "block";
        toggleMusicOn.style.display = "none";
    } else {
        backgroundMusic.pause();
        toggleMusicOff.style.display = "none";
        toggleMusicOn.style.display = "block";
    }
};
toggleMusicOn.addEventListener("click", toggleBackgroundMusic);
toggleMusicOff.addEventListener("click", toggleBackgroundMusic);
// ********************************************************************************************************************************


// bring the X, O and Draw pop ups into the DOM
const xModal = document.getElementById("xModal");
const oModal = document.getElementById("oModal");
const drawModal = document.getElementById("drawModal");
const myModal = document.getElementById("myModal");
// ********************************************************************************************************************************
/*
DEAD FEATURE - Again, when I revisit this will be worked on but for now, it doesn't do anything

// bring the start game modal button into DOM
const startGameButton = document.querySelector("#start-game");

// hide modal function
const hideModal = function () {
    modal.style.display = "none";
}
// Adding event listener to start game button, CB hidemodal func
startGameButton.addEventListener("click", hideModal);

startGameButton.addEventListener("click", function () {
    if (rbIconSelection.checked) {
        console.log("player one turn: roller blades ")
    }
})
//  ********************************************************************************************************************************
*/



// GAME MECHANICS

// Game in progress controls game flow - Restart, wins, insert coin to start all use it
let gameInProgress = false;
//********************************************************************************************************************************


// Pressing the play button allows you to start the game, also triggers a SFX
const playButton = document.querySelector("#play-button")
const playGameFunction = function () {
    gameInProgress = true;
    winningMusicOne.play();
};
playButton.addEventListener("click", playGameFunction);
//********************************************************************************************************************************


// Defining variables for the below conditional statements controlling wins/loses/draws
let playerOne = "X";
let playerTwo = "O";
let currentPlayer = playerOne;
//********************************************************************************************************************************


// bringing the grid squares into the DOM + letting occupied tiles = empty array, referred to later in the code
const tiles = document.querySelectorAll(".square");
const tilesArray = Array.from(tiles);
let occupiedTiles = [];
//********************************************************************************************************************************


//loops through each square in the grid, adds event listener and triggers tileInput function
tiles.forEach(function (tile) {
    tile.addEventListener("click", function tileInput(event) {

// If start button hasn't been clicked, the player can't click any of the grid squares
        if (!gameInProgress) {
            return;
        }

// When a square is clicked, push it to the occupied tiles array
        if (occupiedTiles.includes(tile)) {
            return;
        }
        occupiedTiles.push(tile);

 // when the click occurs, fill the textContent with the value of the current player
        event.target.textContent = currentPlayer;

// references the game winning conditions
        whosWinningThisThingAnyway();

 // switching the current player on each click 
        if (currentPlayer === playerTwo) {
            currentPlayer = playerOne;
        } else {
            currentPlayer = playerTwo;
        }

// each time the player switches, show/hide the correct info at top of screen
        whosTurnIsItFunction();

    },)
})
//********************************************************************************************************************************


// bringing the html elements into the DOM for the "Whose turn is it" feature
const playerOneTurn = document.querySelector("#WT1");
const playerTwoTurn = document.querySelector("#WT2");

// Start with player one, so player two's display is hidden
playerTwoTurn.style.display = "none";

// Hiding the relevant displays depending on who's turn it is
const whosTurnIsItFunction = function () {
    if (currentPlayer === playerOne) {
        playerOneTurn.style.display = "block";
        playerTwoTurn.style.display = "none";
    }
    else {
        playerOneTurn.style.display = "none";
        playerTwoTurn.style.display = "block"
    }
}
//********************************************************************************************************************************


// Bringing each grid square into the DOM
const squareOne = document.querySelector(".one");
const squareTwo = document.querySelector(".two");
const squareThree = document.querySelector(".three");
const squareFour = document.querySelector(".four");
const squareFive = document.querySelector(".five");
const squareSix = document.querySelector(".six");
const squareSeven = document.querySelector(".seven");
const squareEight = document.querySelector(".eight");
const squareNine = document.querySelector(".nine");
//********************************************************************************************************************************


// Defining the "counter" variables that'll keep track of the scores, games played, previous winner. 
let totalScore = document.querySelector("#totalScore");
let gamesPlayed = 0;
let xWins = 0;
let oWins = 0;
let draw = 0;

let prevWinnerTotal = document.querySelector("#prevWinnerTotal");
let currentWinner = prevWinnerTotal;
let xScoreTotal = document.querySelector("#xScoreTotal");
let oScoreTotal = document.querySelector("#oScoreTotal");
let drawScoreTotal = document.querySelector("#drawScoreTotal");
//********************************************************************************************************************************


// Win/Draw/Lose Conditions
// Increasing the counters
// Calling the respective Win Functions
const whosWinningThisThingAnyway = function () {
    if (
        (squareOne.textContent === "X" && squareTwo.textContent === "X" && squareThree.textContent === "X") ||
        (squareOne.textContent === "O" && squareTwo.textContent === "O" && squareThree.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }

        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }

    else if (
        (squareFour.textContent === "X" && squareFive.textContent === "X" && squareSix.textContent === "X") ||
        (squareFour.textContent === "O" && squareFive.textContent === "O" && squareSix.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
    else if (
        (squareSeven.textContent === "X" && squareEight.textContent === "X" && squareNine.textContent === "X") ||
        (squareSeven.textContent === "O" && squareEight.textContent === "O" && squareNine.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
    else if (
        (squareOne.textContent === "X" && squareFive.textContent === "X" && squareNine.textContent === "X") ||
        (squareOne.textContent === "O" && squareFive.textContent === "O" && squareNine.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
    else if (
        (squareThree.textContent === "X" && squareFive.textContent === "X" && squareSeven.textContent === "X") ||
        (squareThree.textContent === "O" && squareFive.textContent === "O" && squareSeven.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
    else if (
        (squareOne.textContent === "X" && squareFour.textContent === "X" && squareSeven.textContent === "X") ||
        (squareOne.textContent === "O" && squareFour.textContent === "O" && squareSeven.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
    else if (
        (squareTwo.textContent === "X" && squareFive.textContent === "X" && squareEight.textContent === "X") ||
        (squareTwo.textContent === "O" && squareFive.textContent === "O" && squareEight.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
    else if (
        (squareThree.textContent === "X" && squareSix.textContent === "X" && squareNine.textContent === "X") ||
        (squareThree.textContent === "O" && squareSix.textContent === "O" && squareNine.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerOne} Won!`;
            xWinsFunction();
        }

        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            gamesPlayed = xWins + oWins + draw;
            totalScore.textContent = gamesPlayed;
            prevWinnerTotal.textContent = `${playerTwo} Won!`;
            oWinsFunction();
        }
    }
// The Draw Functionality. Uses the occupiedTiles array to trigger relevant code
    else if (occupiedTiles.length === 9) {
        draw = ++draw;
        drawScoreTotal.textContent = draw;
        gamesPlayed = xWins + oWins + draw;
        totalScore.textContent = gamesPlayed;
        prevWinnerTotal.textContent = `DRAW`;
        drawFunction();
    }
}
//********************************************************************************************************************************


// Win Functions. Play SFX and show pop up
const xWinsFunction = function () {
    xModal.style.display = "block";
    winningMusicTwo.play();
    backgroundMusic.volume = 0.2;
}

const oWinsFunction = function () {
    oModal.style.display = "block";
    winningMusicTwo.play();
    backgroundMusic.volume = 0.2;
}

const drawFunction = function () {
    drawModal.style.display = "block";
    winningMusicTwo.play();
    backgroundMusic.volume = 0.2;
}
//********************************************************************************************************************************


// Restart Game Functions
// Bringing the buttons into the DOM
const xRestartGame = document.querySelector("#xRestart-game");
const oRestartGame = document.querySelector("#oRestart-game");
const dRestartGame = document.querySelector("#dRestart-game");
const redRestartButton = document.querySelector("#restart-button");
//********************************************************************************************************************************


// When the game restarts, reset the board, arrays, hide all pop ups, reset player turn, play SFX
const restartGameFunction = function () {
    tilesArray.forEach(square => square.innerHTML = "")
    occupiedTiles = [];
    currentPlayer = playerOne;
    whosTurnIsItFunction();
    oModal.style.display = "none";
    xModal.style.display = "none";
    drawModal.style.display = "none";
    winningMusicTwo.pause();
    winningMusicOne.play();
    backgroundMusic.volume = 1;
}
// ********************************************************************************************************************************


// Event Listeners
xRestartGame.addEventListener("click", restartGameFunction);
oRestartGame.addEventListener("click", restartGameFunction);
dRestartGame.addEventListener("click", restartGameFunction);
redRestartButton.addEventListener("click", restartGameFunction);
// ********************************************************************************************************************************
