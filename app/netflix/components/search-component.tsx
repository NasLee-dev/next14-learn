import { Input } from "@material-tailwind/react";

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input 
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search Images"
      icon={<i className="fa-solid fa-magnifying-glass " />}
    />
  )
}