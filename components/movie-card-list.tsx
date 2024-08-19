'use client'
import { Spinner } from "@material-tailwind/react"
import MovieCard from "./moive-card"
import { useRecoilValue } from "recoil"
import { searchState } from "utils/recoil/atoms"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"

export default function MovieCardList() {
  const search = useRecoilValue(searchState)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  async function fetchMovies({ search, page, pageSize }) {
    try {
      const response = await fetch(`api/search-movies?search=${search}&page=${page}&pageSize=${pageSize}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { data, page: responsePage, pageSize: responsePageSize, hasNextPage } = await response.json();
      return { 
        data, 
        page: responsePage,        
        pageSize: responsePageSize,
        hasNextPage 
      };
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return { data: [], hasNextPage: false };
    }
  }

  const { data, isFetchingNextPage, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', search],
    queryFn: ({ pageParam = 1 }) => fetchMovies({ search, page: pageParam, pageSize: 12 }),
    getNextPageParam: lastPage => lastPage.page ? lastPage.page + 1 : undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage])

  return (
    <div className="grid grid-cols-4 w-full h-full gap-1">
      {isFetching || isFetchingNextPage && <Spinner onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
      <>
        {
          data?.pages?.map(page => page?.data)?.flat()?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
        <div ref={ref}></div>
      </>
    </div>
  )
}