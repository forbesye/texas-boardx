import React from "react";

export default function GameCard({ title, price, players, time, img }) {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden my-10 hover:shadow-xl">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-gray-900 font-bold text-3xl">{title}</h1>
        <p className="text-gray-900 font-bold text-xl tracking-wider">{`$${price}/day`}</p>
      </div>
      <img className="h-64 w-full object-contain my-2" src={img} alt={title}/>
      <div className="flex items-center justify-between px-4 py-2">
        <div>
          <p className="text-gray-900">👥 {players} players</p>
          <p className="text-gray-900">🕒 {time} minutes</p>
        </div>
        <button className="px-3 py-1 text-sm text-gray-900 font-semibold rounded ring-2 ring-gray-900 hover:text-white hover:bg-gray-900">Add to bag</button>
      </div>
    </div> 
  )
}
