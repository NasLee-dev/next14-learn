import LogoutButton from "./components/logoutButton";

export const metadata = {
  title: "Instagram",
  description: "Instagram Page",
}

export default function InstagramPage() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Welcome Instagram</h1>
      <LogoutButton />
    </main>
  );
}