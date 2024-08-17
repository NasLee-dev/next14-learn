'use client'
import { Spinner } from "@material-tailwind/react"
import { useQuery } from "@tanstack/react-query"
import MovieCard from "./moive-card"
import { searchMovies } from "actions/movieActions"
import { useRecoilValue } from "recoil"
import { searchState } from "utils/recoil/atoms"

export default function MovieCardList() {
  const search = useRecoilValue(searchState)
  const getAllMoviesQuery = useQuery({
    queryKey: ["movies", search],
    queryFn: async () => await searchMovies({search}),
  })

  return (
    <div className="grid grid-cols-4 w-full h-full gap-1">
      {getAllMoviesQuery.isLoading && <Spinner onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
      {getAllMoviesQuery.data?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}