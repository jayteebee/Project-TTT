// Music
const backgroundMusic = new Audio ("Synthwave.mp3");
const toggleMusicOn = document.querySelector(".toggleMusicOn");
const toggleMusicOff = document.querySelector(".toggleMusicOff");
toggleMusicOff.style.display = "none";
 

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

//  Pop Up - Start Game button



// bring the modal into the DOM
const xModal = document.getElementById("xModal");
const oModal = document.getElementById("oModal");
const drawModal = document.getElementById("drawModal");
const myModal = document.getElementById("myModal");
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


// // GAME MECHANICS
// // Turn Control
let gameInProgress = false;

const winningMusicOne = new Audio("victory.mp3")
const playButton = document.querySelector("#play-button")

const playGameFunction = function() {
    gameInProgress = true;
    winningMusicOne.play();
};

playButton.addEventListener("click", playGameFunction);



let playerOne = "X";
let playerTwo = "O";

let currentPlayer = playerOne;

// bringing the grid squares into the DOM
const tiles = document.querySelectorAll(".square");
const tilesArray = Array.from(tiles);
let occupiedTiles = [];

//loops through each item of the squares, tiles represents each square
tiles.forEach(function (tile) {
    // adding a click event listener over the tiles array
    // then creating the tileInput function, event references the click
    tile.addEventListener("click", function tileInput(event) {

        if (!gameInProgress) {
            return;
        }


        if (occupiedTiles.includes(tile)) {
            return;
        }
        occupiedTiles.push(tile);


        // when the click occurs, fill the textContent with the value of the current player
        event.target.textContent = currentPlayer;
        console.log(`${currentPlayer} has just been`)


        // references the game winning conditions
        whosWinningThisThingAnyway();


        // switching the current player on each click 
        if (currentPlayer === playerTwo) {
            currentPlayer = playerOne;
        } else {
            currentPlayer = playerTwo;
        }
        console.log(`It's now ${currentPlayer}'s turn`)


        // each time the player switches, show/hide the correct info at top of screen
        whosTurnIsItFunction();

    },)
})


// whos turn is it?
const playerOneTurn = document.querySelector("#WT1");
const playerTwoTurn = document.querySelector("#WT2");
playerTwoTurn.style.display = "none";

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


// Result Conditions

const squareOne = document.querySelector(".one");
const squareTwo = document.querySelector(".two");
const squareThree = document.querySelector(".three");
const squareFour = document.querySelector(".four");
const squareFive = document.querySelector(".five");
const squareSix = document.querySelector(".six");
const squareSeven = document.querySelector(".seven");
const squareEight = document.querySelector(".eight");
const squareNine = document.querySelector(".nine");

let xWins = 0;
let oWins = 0;
let draw = 0;
let gamesPlayed = 0;


const whosWinningThisThingAnyway = function () {
    let xScoreTotal = document.querySelector("#xScoreTotal");
    let oScoreTotal = document.querySelector("#oScoreTotal");
    let drawScoreTotal = document.querySelector("#drawScoreTotal");


    if (
        (squareOne.textContent === "X" && squareTwo.textContent === "X" && squareThree.textContent === "X") ||
        (squareOne.textContent === "O" && squareTwo.textContent === "O" && squareThree.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }

        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }

    else if (
        (squareFour.textContent === "X" && squareFive.textContent === "X" && squareSix.textContent === "X") ||
        (squareFour.textContent === "O" && squareFive.textContent === "O" && squareSix.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }
    else if (
        (squareSeven.textContent === "X" && squareEight.textContent === "X" && squareNine.textContent === "X") ||
        (squareSeven.textContent === "O" && squareEight.textContent === "O" && squareNine.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }
    else if (
        (squareOne.textContent === "X" && squareFive.textContent === "X" && squareNine.textContent === "X") ||
        (squareOne.textContent === "O" && squareFive.textContent === "O" && squareNine.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }
    else if (
        (squareThree.textContent === "X" && squareFive.textContent === "X" && squareSeven.textContent === "X") ||
        (squareThree.textContent === "O" && squareFive.textContent === "O" && squareSeven.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }
    else if (
        (squareOne.textContent === "X" && squareFour.textContent === "X" && squareSeven.textContent === "X") ||
        (squareOne.textContent === "O" && squareFour.textContent === "O" && squareSeven.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }
    else if (
        (squareTwo.textContent === "X" && squareFive.textContent === "X" && squareEight.textContent === "X") ||
        (squareTwo.textContent === "O" && squareFive.textContent === "O" && squareEight.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }
        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }
    else if (
        (squareThree.textContent === "X" && squareSix.textContent === "X" && squareNine.textContent === "X") ||
        (squareThree.textContent === "O" && squareSix.textContent === "O" && squareNine.textContent === "O")) {
        if (currentPlayer === playerOne) {
            xWins = ++xWins;
            xScoreTotal.textContent = xWins;
            console.log("X wins!")
            xWinsFunction();
        }

        else if (currentPlayer === playerTwo) {
            oWins = ++oWins;
            oScoreTotal.textContent = oWins;
            console.log("O wins!")
            oWinsFunction();
        }
    }

    else if (occupiedTiles.length === 9) {
        draw = ++draw;
        drawScoreTotal.textContent = draw;
        drawFunction();


    }
 
}



const winningMusicTwo = new Audio("drum.mp3")

const xWinsFunction = function () {
    // gameInProgress = false;
    xModal.style.display = "block";
    winningMusicTwo.play();
    backgroundMusic.volume = 0.2;
}

const oWinsFunction = function () {
    // gameInProgress = false;
    oModal.style.display = "block";
    winningMusicTwo.play();
    backgroundMusic.volume = 0.2;
}

const drawFunction = function () {
    // gameInProgress = false;
    drawModal.style.display = "block";
    winningMusicTwo.play();
    backgroundMusic.volume = 0.2;
}


const xRestartGame = document.querySelector("#xRestart-game");
const oRestartGame = document.querySelector("#oRestart-game");
const dRestartGame = document.querySelector("#dRestart-game");
const redRestartButton = document.querySelector("#restart-button");


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

xRestartGame.addEventListener("click", restartGameFunction);
oRestartGame.addEventListener("click", restartGameFunction);
dRestartGame.addEventListener("click", restartGameFunction);
redRestartButton.addEventListener("click", restartGameFunction);

