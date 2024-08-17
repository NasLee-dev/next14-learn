'use client'
import { Spinner } from "@material-tailwind/react"
import MovieCard from "./moive-card"
import { useRecoilValue } from "recoil"
import { searchState } from "utils/recoil/atoms"
import { useEffect, useState } from "react"

export default function MovieCardList() {
  const search = useRecoilValue(searchState)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  async function fetchMovies() {
    setLoading(true)
    try {
      const response = await fetch(`api/search-movies?search=${search}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, [search]);
  return (
    <div className="grid grid-cols-4 w-full h-full gap-1">
      {loading && <Spinner onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}