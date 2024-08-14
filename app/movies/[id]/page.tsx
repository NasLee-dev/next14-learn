'use client'

import DetailUI from "./ui"

export default function MovieDetail({
  params
}) {
  return (
    <main className="py-16 flex items-center bg-blue-50 w-full absolute top-0 left-0 right-0">
      <DetailUI id={params.id} />
    </main>
  )
}