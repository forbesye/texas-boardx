import React from "react";
import GameCard from "components/GameCard";

export default function GameList({ games }) {
  return (
    <div className="grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-col-3">
      {games.map((game) => (
        <GameCard {...game} />
      ))}
    </div>
  );
}
