'use client'

import { getRandomImage } from "app/instagram/util/random"

export default function Person({ index, userId, name, onlineAt, isActive, onChatScreen }) {
  return (
    <div className={`flex gap-4 items-center p-4 ${isActive && "bg-light-blue-50"} ${onChatScreen ? "bg-gray-500" : "bg-gray-100"}`}>
      <img 
        src={getRandomImage(index)}
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="text-black font-bold text-lg">{name}</p>
        <p className="text-gray-500">{onlineAt}</p>
      </div>
    </div>
  )
}