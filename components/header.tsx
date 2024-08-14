'use client'

import Logo from "./logo"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 py-2 px-4 bg-gray-900 flex items-center justify-between z-20">
      <nav className="flex gap-4">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex gap-2 items-center border border-white rounded-md p-2 bg-transparent text-white w-full max-w-72">
        <i className="fas fa-search"></i>
        <input 
          className="bg-transparent"
          placeholder="Search for movies"
        />
      </div>
    </header>
  )
}