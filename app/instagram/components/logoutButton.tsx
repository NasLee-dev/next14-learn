'use client'
import { createBrowserSupabaseClient } from "utils/supabase/client"

export default function LogoutButton() {
  const supabase = createBrowserSupabaseClient();
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => 
    {
      try {
        supabase.auth.signOut()
      } catch (error) {
        console.log(error.message)
      }
    }
    }
      
    >
      Logout
    </button>
  )
}