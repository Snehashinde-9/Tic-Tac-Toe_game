let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function renderBoard() {
  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";
  board.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.textContent = cell;
    cellDiv.addEventListener("click", () => makeMove(index));
    boardContainer.appendChild(cellDiv);
  });
}

function makeMove(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      document.getElementById("message").textContent = `Player ${board[a]} wins!`;
      gameOver = true;
      return;
    }
  }

  if (!board.includes("")) {
    document.getElementById("message").textContent = "It's a draw!";
    gameOver = true;
  }
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("message").textContent = "";
  renderBoard();
}

renderBoard();
