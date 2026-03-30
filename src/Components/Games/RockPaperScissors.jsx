import React, { useState } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

export default function RockPaperScissors() {
    const [mode, setMode] = useState("");

    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center p-6"
        >
            <h1 className="text-4xl font-bold text-black">Rock Paper Scissors</h1>

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
    const choices = [
        { id: "rock", icon: <FaHandRock size={40} /> },
        { id: "paper", icon: <FaHandPaper size={40} /> },
        { id: "scissors", icon: <FaHandScissors size={40} /> },
    ];

    const [p1Choice, setP1Choice] = useState(null);
    const [p2Choice, setP2Choice] = useState(null);
    const [turn, setTurn] = useState("P1");
    const [winner, setWinner] = useState(null);

    const getWinner = (c1, c2) => {
        if (c1 === c2) return "draw";
        if (
            (c1 === "rock" && c2 === "scissors") ||
            (c1 === "paper" && c2 === "rock") ||
            (c1 === "scissors" && c2 === "paper")
        ) {
            return "P1";
        }
        return "P2";
    };

    const handleChoice = (choiceId) => {
        if (winner) return;

        if (mode === "computer") {
            const c2 = choices[Math.floor(Math.random() * choices.length)].id;
            setP1Choice(choiceId);
            setP2Choice(c2);
            setWinner(getWinner(choiceId, c2));
            setTurn("result");
        } else {
            if (turn === "P1") {
                setP1Choice(choiceId);
                setTurn("P2");
            } else if (turn === "P2") {
                setP2Choice(choiceId);
                setWinner(getWinner(p1Choice, choiceId));
                setTurn("result");
            }
        }
    };

    const reset = () => {
        setP1Choice(null);
        setP2Choice(null);
        setTurn("P1");
        setWinner(null);
    };

    return (
        <div className="flex flex-col items-center gap-6 mt-8 text-black">
            <div className="text-xl font-semibold">
                {winner ? (
                    winner === "draw" ? (
                        "It's a Draw!"
                    ) : mode === "computer" ? (
                        winner === "P1" ? (
                            "You Win!"
                        ) : (
                            "Computer Wins!"
                        )
                    ) : winner === "P1" ? (
                        "Player 1 Wins!"
                    ) : (
                        "Player 2 Wins!"
                    )
                ) : mode === "computer" ? (
                    "Your Turn"
                ) : turn === "P1" ? (
                    "Player 1's Turn"
                ) : (
                    "Player 2's Turn"
                )}
            </div>

            {turn !== "result" ? (
                <section className="flex gap-4 p-6">
                    {choices.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => handleChoice(c.id)}
                            className="w-20 h-20 md:w-24 md:h-24 border-2 border-black rounded-xl flex items-center justify-center"
                        >
                            {c.icon}
                        </button>
                    ))}
                </section>
            ) : (
                <section className="flex items-center gap-8 p-6">
                    <div className="flex flex-col items-center gap-4">
                        <span className="font-semibold text-lg">
                            {mode === "computer" ? "You" : "Player 1"}
                        </span>
                        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-black rounded-xl flex items-center justify-center">
                            {choices.find((c) => c.id === p1Choice)?.icon}
                        </div>
                    </div>
                    <div className="text-3xl font-bold">VS</div>
                    <div className="flex flex-col items-center gap-4">
                        <span className="font-semibold text-lg">
                            {mode === "computer" ? "Computer" : "Player 2"}
                        </span>
                        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-black rounded-xl flex items-center justify-center">
                            {choices.find((c) => c.id === p2Choice)?.icon}
                        </div>
                    </div>
                </section>
            )}

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