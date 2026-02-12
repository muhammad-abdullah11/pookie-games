import React from 'react'
import Games from "../../assets/TotalGames.json";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-3 gap-4 auto-rows-[110px] p-4">
  {Games?.map((game, i) => (
    <div
      key={i}
      className={`relative group rounded-2xl overflow-hidden 
      ${i % 4 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
    >
      <img
        onClick={()=>navigate("/games/tic-tac-toe")}
        src={game.thumbnail}
        alt={game.name}
        className="w-full h-full object-cover"
      />

      <h2 className="absolute bottom-2 left-2 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200">
        {game.name}
      </h2>
    </div>
  ))}
</section>
  )
}

export default HomePage