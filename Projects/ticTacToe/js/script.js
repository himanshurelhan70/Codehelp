const gameInfo = document.querySelector('.game-info');
const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.new-game-btn');

// decide the current player
let currentPlayer;

// All possible combinations to win
const winningPositions = [
    // horizontal
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    // vertical
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
]

let gameGrid;


// Initialize the game
function initGame(){
    currentPlayer = 'x';
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach((box, index) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        // box.classList = `box box-${index + 1}`;
        box.classList.remove("win");
    });

    gameInfo.innerText = `Current Player - ${currentPlayer.toUpperCase()}`;
    newGameBtn.classList.remove("active");
}

initGame();


// event listener for each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer.toUpperCase();
        boxes[index].style.pointerEvents = "none";
        gameGrid[index] = currentPlayer;
        // swapping player's turn
        swapTurn();
        // checking game is over or not
        checkGameOver();
    }
}

// swap player turns
function swapTurn(){
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    gameInfo.innerText = `Current Player - ${currentPlayer.toUpperCase()}`;
}

function checkGameOver(){
    let winner = "";
    // checking if any player matches the winning combinations
    winningPositions.forEach((position) => {
        if(gameGrid[position[0]] != "" && 
            gameGrid[position[1]] != "" && 
            gameGrid[position[2]] != "" && 
            gameGrid[position[0]] === gameGrid[position[1]] &&
            gameGrid[position[1]] === gameGrid[position[2]]
        ){
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            winner = gameGrid[position[0]] === 'x' ? 'x' : 'o'; 
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    // checks if we get the winner
    if(winner != ""){
        gameInfo.innerText = `Winner - ${winner.toUpperCase()}`;
        newGameBtn.classList.add("active");
        return;
    }

    // checks if its a draw
    let allBoxesFilled = true;
    gameGrid.forEach((box) => {
        if(box === ""){
            allBoxesFilled = false;
        }
    });

    if(allBoxesFilled){
        gameInfo.innerText = `It's a Draw`;
        newGameBtn.classList.add("active");
    }
}

newGameBtn.addEventListener('click', initGame);