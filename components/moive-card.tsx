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
        <div className="flex items-center justify-center z-10 bg-black hover:opacity-80 opacity-0 transition-opacity duration-300 absolute top-0 bottom-0 left-0 right-0">
            <p className="text-center font-bold text-white text-2xl">
              {movie.title}
            </p>
        </div>
      </Link>
    </div>
  )
}
