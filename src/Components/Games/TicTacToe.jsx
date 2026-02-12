import React, { useState, useEffect } from "react";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [mode, setMode] = useState("");

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#ccd5ae" }}
    >
      <h1 className="text-4xl font-bold text-black">Tic-Tac-Toe</h1>

      {mode === "" && (
        <div className="flex flex-col gap-4 mt-8">
          <button
            onClick={() => setMode("computer")}
            className="px-6 py-3 rounded-xl font-semibold border border-black text-black"
          >
            Play with Computer
          </button>
          <button
            onClick={() => setMode("friend")}
            className="px-6 py-3 rounded-xl font-semibold border border-black text-black"
          >
            Play with Friend
          </button>
        </div>
      )}

      {mode !== "" && <Game mode={mode} onBack={() => setMode("")} />}
    </main>
  );
}

function Game({ mode, onBack }) {
  const human = "X";
  const computer = "O";

  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (b) => {
    for (let [a, b1, c] of winningCombos) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    if (b.every((cell) => cell !== "")) return "draw";
    return null;
  };

  const getBestMove = (b) => {
    for (let [a, b1, c] of winningCombos) {
      if (b[a] === computer && b[b1] === computer && !b[c]) return c;
      if (b[a] === computer && !b[b1] && b[c] === computer) return b1;
      if (!b[a] && b[b1] === computer && b[c] === computer) return a;
    }
    for (let [a, b1, c] of winningCombos) {
      if (b[a] === human && b[b1] === human && !b[c]) return c;
      if (b[a] === human && !b[b1] && b[c] === human) return b1;
      if (!b[a] && b[b1] === human && b[c] === human) return a;
    }
    const empty = b
      .map((v, i) => (v === "" ? i : null))
      .filter((v) => v !== null);
    return empty[Math.floor(Math.random() * empty.length)];
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    if (mode === "computer" && player !== human) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) setWinner(result);
  }, [board]);

  useEffect(() => {
    if (mode === "computer" && player === computer && !winner) {
      const move = getBestMove(board);
      if (move !== undefined) {
        const newBoard = [...board];
        newBoard[move] = computer;
        setTimeout(() => {
          setBoard(newBoard);
          setPlayer(human);
        }, 400);
      }
    }
  }, [player, board, winner, mode]);

  const reset = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-8 text-black">
      <div className="text-xl font-semibold">
        {winner
          ? winner === "draw"
            ? "It's a Draw!"
            : mode === "computer"
            ? winner === human
              ? "You Win!"
              : "Computer Wins!"
            : `Winner: ${winner}`
          : mode === "computer"
          ? player === human
            ? "Your Turn"
            : "Computer Thinking..."
          : `Turn: ${player}`}
      </div>

      <section className="grid grid-cols-3 gap-4 p-6">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 md:w-24 md:h-24 border-2 border-black rounded-xl text-3xl font-bold flex items-center justify-center"
          >
            {cell}
          </button>
        ))}
      </section>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-5 py-2 rounded-lg border border-black font-semibold"
        >
          Restart
        </button>
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-lg border border-black font-semibold"
        >
          Back
        </button>
      </div>
    </div>
  );
}