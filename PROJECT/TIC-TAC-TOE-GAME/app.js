let turn = "O";
let total_turn = 0;

let winner = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal (top-left to bottom-right)
  [2, 4, 6]  // Diagonal (top-right to bottom-left)
]
// winner chek
function CheckWinner() {
  for (let [index0, index1, index2] of winner)
    if (boardArray[index0] != "E" && boardArray[index0] === boardArray[index1] && boardArray[index1] === boardArray[index2]) {
      return 1;
    }
  return 0;
}
//tic tac game
const game_tic_tac = (event) => {
  const element = event.target;
  if (boardArray[element.id] === "E") {

    total_turn++;
    if (turn === "O") {
      element.innerHTML = 'O';
      turn = "X";
      boardArray[element.id] = 'O';
      element.style.backgroundColor = 'red';
      // const player2Img = document.getElementsByClassName('player2Img');
      // player2Img.style.transition = "transform 0.3s ease";
      
      if (CheckWinner()) {
        document.getElementById('winnerMessage').innerHTML = "Winner is O"
        // remove event listener
        board.removeEventListener('click', game_tic_tac);
        return 0;
      }
    }

    else {
      element.innerHTML = 'X';
      turn = "O";
      boardArray[element.id] = 'X';
      element.style.backgroundColor = 'blue';
      element.style.color = 'white';

      if (CheckWinner()) {
        document.getElementById('winnerMessage').innerHTML = "Winner is X"
        // remove event listener
        board.removeEventListener('click', game_tic_tac);
        return 0;

      }
      // turn = 'O'
    }
    if (total_turn == 9) {
      document.getElementById('winnerMessage').innerHTML = "<strong>It's a draw</strong>";
    }
  }

}

// ***********************************************************
let boardArray = new Array(9).fill("E");

const board = document.getElementById('board');
const cell = document.getElementsByClassName('cell');

//function call for game
board.addEventListener('click', game_tic_tac);

// playAgain button
const clear = document.getElementById('clear-Btn');
clear.addEventListener('click', (event) => {
  const cell = document.getElementsByClassName('cell');
  Array.from(cell).forEach((value) => {
    value.innerHTML = "";
    value.style = '';
    
  })

  document.getElementById('winnerMessage').innerHTML = "Let's play";
  boardArray = new Array(9).fill("E");
  total_turn = 0;
  turn = (turn === "O") ? "X" : "O";

  // Initial setup
  const board = document.getElementById('board');
  board.addEventListener('click', game_tic_tac);
})
//new game
// const newgame = document.getElementById('refresh-Btn');
// newgame.addEventListener('click',()=>{
//   window.location.reload()
// })