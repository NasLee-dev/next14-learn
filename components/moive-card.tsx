'use client'

import Link from "next/link"

export default function MovieCard({ movie }) {
  return (
    <div className="col-span-1 relative">
      {/* img */}
      <img 
        className="w-full"
        src={movie?.image_url}
      />
      {/* Dimmed */}
      <Link href={`/movies/${movie.id}`}>
        <div className="absolute items-center justify-center top-0 bottom-0 left-0 right-0 z-10 bg-black hover:opacity-80 opacity-0 transition-opacity duration-300">
            <p className="font-bold text-white text-xl">
              {movie.title}
            </p>
        </div>
      </Link>
    </div>
  )
}
