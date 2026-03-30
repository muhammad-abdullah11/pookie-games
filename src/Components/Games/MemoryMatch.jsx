import React, { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1544015759-1376ce5600d1?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=200&h=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=200&h=200&auto=format&fit=crop"
];

export default function MemoryMatch() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const shuffled = [...images, ...images]
            .map((img, i) => ({ id: i, img, type: images.indexOf(img) }))
            .sort(() => Math.random() - 0.5);
        setCards(shuffled);
        setSolved([]);
        setFlipped([]);
        setMoves(0);
    };

    const getGrade = () => {
        if (moves <= 12) return { text: "Excellent!" };
        if (moves <= 18) return { text: "Good Job!" };
        return { text: "Keep Practicing!" };
    };

    const handleClick = (id) => {
        if (disabled || flipped.includes(id) || solved.includes(cards.find(c => c.id === id).type)) return;

        if (flipped.length === 0) {
            setFlipped([id]);
            return;
        }

        if (flipped.length === 1) {
            setDisabled(true);
            setMoves(prev => prev + 1);
            const firstCard = cards.find(c => c.id === flipped[0]);
            const secondCard = cards.find(c => c.id === id);
            setFlipped([...flipped, id]);

            if (firstCard.type === secondCard.type) {
                setSolved([...solved, firstCard.type]);
                setFlipped([]);
                setDisabled(false);
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setDisabled(false);
                }, 800);
            }
        }
    };

    const isWon = solved.length === images.length;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#b8c0ff]">
            <h1 className="text-4xl font-bold text-black mb-2">Memory Match</h1>
            <div className="text-xl font-semibold mb-6 flex gap-8">
                <span>Moves: {moves}</span>
                {isWon && (
                    <span className="text-green-700 animate-bounce">
                        {getGrade().text}
                    </span>
                )}
            </div>

            <div className="grid grid-cols-4 gap-4">
                {cards.map((card) => {
                    const isFlipped = flipped.includes(card.id) || solved.includes(card.type);
                    return (
                        <button
                            key={card.id}
                            onClick={() => handleClick(card.id)}
                            className="relative w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-500 perspective-1000"
                        >
                            <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                                <div className="absolute w-full h-full bg-black backface-hidden flex items-center justify-center text-white font-bold text-2xl">?</div>
                                <div className="absolute w-full h-full bg-white backface-hidden rotate-y-180">
                                    <img src={card.img} alt="card" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 flex gap-4">
                <button onClick={initializeGame} className="px-6 py-2 rounded-lg border-2 border-black font-bold hover:bg-white transition-colors">Restart</button>
                <button onClick={() => window.location.href = '/'} className="px-6 py-2 rounded-lg border-2 border-black font-bold hover:bg-white transition-colors">Home</button>
            </div>
        </main>
    );
}
