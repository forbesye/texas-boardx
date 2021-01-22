import React from "react";
import GameCard from "components/GameCard";

export default function GameList({ games }) {
  return ( <>
      <h1 className="flex justify-center text-gray-900 font-bold text-4xl my-4">Catalog</h1>
      <div className="flex flex-wrap justify-center">
        {games.map((game) => (
          <GameCard {...game} />
        ))}
      </div>    
   </> );
}
