# TIC TAC TOE PROJECT README

## Description Of Project

This is the first Project I have been assigned in the General Assembly Software Engineering Immersive Course.
I have been tasked with creating a fully functioning version of the game Tic-Tac-Toe (Noughts and Crosses for us English folk).  

## Deployment Link + Getting Started

Follow this link to gain access to my finished project: https://jayteebee.github.io/Project-TTT/
Simply click the link and away you go!  

## Timeframe

We were given the instructions for this project on Wednesday, 29th March, 2023. We had until Tuesday, April 4th at 9am to hand in the final version.  

For this project, we were instructed to work solo but were able to create issue requests to our tutors if we needed help with a specific problem.  

## Technologies Used

I made use of HTML, CSS, and JavaScript for the coding functionality.  

I used Visual Studio Code as my primary code editor and Live Server for my inter-project testing. 

## Brief

Below, I will summarise the key points I was given for the brief.  

### Big Goals.

Build a web application from scratch, without a starter codebase
Use your programming skills to work out the game logic for a simple game like Tic Tac Toe
Separate HTML, CSS, and JavaScript files in your application
Build an application to a specification that someone else gives you
Build a dynamic game that allows two players to compete from the same computer
Craft a README.md file that explains your app to the world

### Technical Requirements

Render a game board in the browser
Switch turns between X and O (or whichever markers you select)
Visually display which side won if a player gets three in a row, or show a draw if neither player wins
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
Use JavaScript for DOM manipulation
Deploy your game online, where the rest of the world can access it
You can use GitHub Pages for deploying your project
Use semantic markup for HTML and CSS (adhere to best practices)
Have well-formatted, and well-commented code

### User Stories

As a user, I should be able to start a new tic tac toe game
As a user, I should be able to click on a square to add X first and then O, and so on
As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
As a user, I should not be able to click the same square twice
As a user, I should be shown a message when I win, lose or tie
As a user, I should not be able to continue playing once I win, lose, or tie
As a user, I should be able to play the game again without refreshing the page

### Potential Extra Tic Tac Toe Features

Keep track of multiple game rounds with a win, lose and tie counter
Allow players to customize their tokens (X, O, name, picture, etc)
Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
Involve Audio in your game
Create an AI opponent: teach JavaScript to play an unbeatable game against you
Make your site fully responsive so that it is playable from a mobile phone
Get inventive with your styling e.g. use hover effects or animations

### Super Potential Extra Tic Tac Toe Features

Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services.

## Planning

My initial steps for the project were to create a wireframe on which I could base the "skeleton" of my project, which I have screenshotted below.

(Screenshot 2023-03-29 at 13.01.29.png)

After I created this inital wireframe, i set about recreating it with HTML and CSS.

Looking back, I probably coded too much here. Rather than leaving it at a bare-bones state I polished it too much. The reason I think that is because when it came time to do the Javascript, the additional features I'd added (like backgrounds, icons, pop-ups etc) just got in the way, and were subject to change anyway.

Once this stage was complete, I set about writing pseudo JavaScript code for each User Stories section.
Again! In hindsight, I should have spent longer writing this pseudocode. The reason for that is some of the later requirements, such as:

As a user, I should not be able to continue playing once I win, lose, or tie
As a user, I should be able to play the game again without refreshing the page

... were not fleshed out properly in the pseudocode, which meant the foundations I laid for the earlier requirements were not sufficient to support those two features.

This resulted in a partial reset of the project, going back a few steps so I could do it properly second time around. Lesson learned!

## Build/Code Process

The overall build was challenging, a little stressful but ulitmately very rewarding upon completion. 

Below, I'll outline some parts of the build (JavaScript..) that challenged me the most and parts I'm most proud of.

#### First up: The Game Flow Function

    tiles.forEach(function (tile) {
    tile.addEventListener("click", function tileInput(event) {
        if (!gameInProgress) {
            return;
        }
        if (occupiedTiles.includes(tile)) {
            return;
        }
        occupiedTiles.push(tile);
        event.target.textContent = currentPlayer;
        whosWinningThisThingAnyway();
        if (currentPlayer === playerTwo) {
            currentPlayer = playerOne;
        } else {
            currentPlayer = playerTwo;
        }
        whosTurnIsItFunction();
        },)
    })

This function started out as just the ForEach array method and Event Listener function. That was easy enough to code. The challenge began when I realised I needed to continue to add to it (controlling the turns, wether someone can click the tiles if the game isn't in progress, and the winning conditions) without making it a behemoth that carries the entire game on it's back!

Unfortunately, I didn't have enough time to refactor the code and seperate the functionality. I'm happy that I managed to create a bug-free (functionality wise) game, and that this function works properly, but given more time i'd definitely make the above amendments. 


#### Secondly, the If/Else statements controlling the game logic.

I'll post only the first section here for readabilities sake as the code is not DRY (the challenge I faced).

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

This function does a lot... too much. I began to code it with the mindset of "let's get it to work and refactor when I can", but I ran out of time prior to submission.

It works, and I'm proud that it does because it took a lot of thought to get it to that point. Especially with the various functions called within it. However, had i spent more time on the pseudocode and thinking this section through, I'm positive I would have figured out how to do the logic with it centered around an  "array of winning conditions". I did make tracks towards that the day before submission, but simply did not have the time. Again, lesson learned!

#### The Restart Function

Again, this code is far from DRY. This has been my main learning point from this project. I can code and get it working, but with more time spent planning and on the pseudocode I could avoid code blocks like the one below where there is a lot of repetition.

On a positive note, It does everything that's required of it and as yet, there are no bugs I've discovered. Everything works as I intended it to.

    // Restart Game Functions
    // Bringing the buttons into the DOM
    const xRestartGame = document.querySelector("#xRestart-game");
    const oRestartGame = document.querySelector("#oRestart-game");
    const dRestartGame = document.querySelector("#dRestart-game");
    const redRestartButton = document.querySelector("#restart-button");

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

    // Event Listeners
    xRestartGame.addEventListener("click", restartGameFunction);
    oRestartGame.addEventListener("click", restartGameFunction);
    dRestartGame.addEventListener("click", restartGameFunction);
    redRestartButton.addEventListener("click", restartGameFunction);

One section I am particularly proud of is occuipiedTiles = []. Seemingly obvious, it didn't appear anywhere in my code until I was nearly finished with the Minimal Viable Product. Up until that point I was chipping away at various other functions and methods to try and reset the game board.

It was only when I had the idea of assigning the tiles to an empty array, and pushing the tile that was clicked to this empty array (this occurs in the Game Flow Function) that I cracked the MVP. Happy days!

#### Finally, Responsive Design

This is actually a CSS issue, and perhaps one of the only "bugs" in the code.

    @media screen and (max-width: 800px) {
        body {
            display: grid;
            grid-template-columns: 20% 60% 20%;
            grid-template-rows: 20% 60% 20%;
            transform: rotate(90deg);
            height: 100vh;
            width: 100vh;
        }
    }

As you can see, there's not really a whole lot there. This is due to not coding responsively as and when I was doing the main CSS. In future projects I will definitely do media queries and responsive design as I go rather than leaving it to the end.

#### Bonus! The bit I had most fun with.

    const backgroundMusic = new Audio("Synthwave.mp3");
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

There's nothing particularly special about this, but I really had a lot of fun including it. Mainly because the music it's playing is one of my favourite 80's Synthwave mixes and it really adds the atmosphere to the game (80's Arcade Themed!)

### Wins!

Solving the above issues was a win, and honestly just having completed the project within the time-frame was a big win for me!

I'm especially happy with the look and feel of the site (as long as you don't go on a smaller screen...)

### Key Learnings and Takeaways! 

A few big takeaways! 

Firstly, plan and write pseudocode to a much better standard. This alone would be a huge improvement. Not only in terms of time saved but also stress! 

Secondly, do responsive design as a matter of habit, rather than an add on at the end.

### Future Improvements

DRY! Make the If/Else statements dry, the funcitons for game flow and resetting the board.

There are of course features here and there which I'd like to add (like a better hover animation over the tiles, the ability to use icons/symbols instead of X's and O's) but making it dry is the most important to me.

