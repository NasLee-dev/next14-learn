import Sidebar from "../sidebar";

export default async function MainLayout({ children }) {
  return (
    <main className="">
      <Sidebar />
      {children}
    </main>
  )
}