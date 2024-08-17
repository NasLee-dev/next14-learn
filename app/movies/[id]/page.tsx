import { getMovieById } from "actions/movieActions"
import DetailUI from "./ui"

export default async function MovieDetail({
  params
}) {
  const movie = await getMovieById({ id: params.id })
  return (
    <main className="py-16 flex items-center bg-blue-50 w-full absolute top-0 left-0 right-0">
      {movie ? (
        <DetailUI movie={movie} />
      ) : (
        <p>Movie not found</p>
      )}
    </main>
  )
}