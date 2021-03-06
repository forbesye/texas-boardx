import React from "react";
import Link from "next/link"

export default function GameCard({ id, title, price, players, time, img }) {
  return (
    <Link href={`/games/${id}`}>
      <div className="cursor-pointer w-80 bg-white shadow-xl rounded-xl overflow-hidden m-4 flex-none p-4 transition duration-250 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 hover:scale-110">
        <h1 className="text-gray-900 font-bold text-2xl px-4 mt-2 truncate">{title}</h1>
        <p className="text-gray-900 font-bold text-lg tracking-wider px-4">{`$${price}/day`}</p>
        <img className="h-64 w-full object-contain my-2 p-4" src={img} alt={title} />
        <div className="flex flex-wrap items-center justify-between content-end px-4 py-2">
          <div>
            <p className="text-gray-900">👥 {players} players</p>
            <p className="text-gray-900">🕒 {time} minutes</p>
          </div>
          <div>
            <button className="px-3 py-1 text-sm text-gray-900 font-semibold rounded ring-2 ring-gray-900 hover:text-white hover:bg-gray-900">Add to bag</button>
          </div>
          
        </div>
      </div> 
    </Link>
  )
}
