import { createServerSupabaseClient } from "utils/supabase/server";
import LogoutButton from "./components/logoutButton";

export const metadata = {
  title: "Instagram",
  description: "Instagram Page",
}

export default async function InstagramPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Welcome {session?.user?.email?.split('@')?.[0]}</h1>
      <LogoutButton />
    </main>
  );
}