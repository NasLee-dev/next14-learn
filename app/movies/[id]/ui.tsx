'use client'

export default function DetailUI({ id }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img 
        src="https://image.tmdb.org/t/p/original/6Y9fl8tD1xtyUr9jI4j8Zzv4cLw.jpg"
        className="w-1/3"
      />
      <div className="w-full md:w-2/3 flex flex-col p-6 gap-4 text-black items-center md:items-start">
        <h1 className="text-3xl font-bold text-black">
          Dune: Part Two
        </h1>
        <p className="text-lg font-medium text-black">
          Dune Part Two
        </p>
        <div>
          <p>
            <i className="fas fa-star mr-1"></i>
            Rating: 8.5
          </p>
          <p>Popularity </p>
          <p>Release Date: 2023-10-20</p>
        </div>
      </div>
    </div>
  )
}