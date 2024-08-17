'use client'

export default function DetailUI({ movie }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img 
        src={movie.image_url}
        className="w-1/3"
      />
      <div className="w-full md:w-2/3 flex flex-col p-6 gap-4 text-black items-center md:items-start">
        <h1 className="text-3xl font-bold text-black">
          {movie.title}
        </h1>
        <p className="text-lg font-medium text-black">
          {movie.overview}
        </p>
        <div>
          <p>
            <i className="fas fa-star mr-1"></i>
            {movie.vote_average}
          </p>
          <p>Popularity : {movie.popularity}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  )
}