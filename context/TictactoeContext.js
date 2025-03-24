import { createContext, useState } from "react";

const TictactoeContext = createContext();

export function TictactoeProvider({ children }) {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState({ Player1: 0, Player2: 0, draw: 0 });
  const [winner, setWinner] = useState(null);

  function resetBoard() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setWinner(null);
    setScores({ Player1: 0, Player2: 0, draw: 0 });
  }
  function nextRound() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setWinner(null);
  }

  function checkWinner(board) {
    const lines = [
      // Rows
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      // Columns
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      // Diagonals
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    for (let line of lines) {
      if (line[0] && line[0] === line[1] && line[0] === line[2]) {
        return line[0];
      }
    }
    return board.flat().includes("") ? null : "Draw";
  }

  function handleCellPress(row, col) {
    if (board[row][col] || winner) return;

    const updatedBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentPlayer : cell))
    );
    setBoard(updatedBoard);

    const gameWinner = checkWinner(updatedBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setScores((prev) => ({
        ...prev,
        Player1: gameWinner === "X" ? prev.Player1 + 1 : prev.Player1,
        Player2: gameWinner === "O" ? prev.Player2 + 1 : prev.Player2,
        draw: gameWinner === "Draw" ? prev.draw + 1 : prev.draw,
      }));
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  }

  return (
    <TictactoeContext.Provider value={{ board, currentPlayer, scores, winner, handleCellPress, resetBoard, nextRound }}>
      {children}
    </TictactoeContext.Provider>
  );
}

export default TictactoeContext;