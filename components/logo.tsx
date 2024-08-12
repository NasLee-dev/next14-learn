'use client'

import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src="/images/dropbox_icon.png"
        alt="Dropbox Logo"
        width={50}
        height={50}
        className="!w-10 !h-auto"
      />
      <span className="text-xl font-bold">DropBox</span>
    </div>
  )
}