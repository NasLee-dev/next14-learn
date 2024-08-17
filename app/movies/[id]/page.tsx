import DetailUI from "./ui"

export default async function MovieDetail({
  params
}) {
  const { id } = params;
  const getMovieById = async () => {
    try {
      // API URL에서 id를 쿼리 매개변수로 전달
      const fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/movie-detail?id=${id}`;
      console.log(`Fetching from URL: ${fetchUrl}`);

      const response = await fetch(fetchUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch movie detail:", error);
      return null;
    }
  };

  const movie = await getMovieById();
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
