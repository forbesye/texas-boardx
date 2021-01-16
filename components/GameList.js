import React from 'react'
import GameCard from "components/GameCard"

export default function GameList({ games }) {
    return (
        <div>
            {games.map(game => (
                <GameCard {...game}/>
            ))}
        </div>
    )
}