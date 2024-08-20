'use client'

import { useQuery } from "@tanstack/react-query"
import DropboxImage from "./dropbox-image"
import { searchFiles } from "actions/storageActions"
import { Spinner } from "@material-tailwind/react"

export default function DropboxImageList({
  searchInput
}: {
  searchInput: string
}) {
  const searchInputQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
      {searchInputQuery.isLoading && (
        <Spinner />
      )}
      {searchInputQuery.data?.map((file: any) => (
        <DropboxImage
          key={file.id}
          file={file}
        />
      ))}
    </section>
  )
}