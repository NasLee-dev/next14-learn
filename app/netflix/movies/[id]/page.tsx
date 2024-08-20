import DetailUI from "./ui"

const getMovieById = async (id: string) => {
  try {
    // API URL에서 id를 쿼리 매개변수로 전달
    const fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/movie-detail?id=${id}`;
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

export async function generateMetadata({ params, searchParams }) {
  const id = params.id;
  const movie = await getMovieById(id);
  return {
    title: movie?.title,
    description: movie?.overview,
    openGraph: {
      images: [movie?.image_url]
    }
  };
}

export default async function MovieDetail({
  params
}) {
  const { id } = params;


  const movie = await getMovieById(id);
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
