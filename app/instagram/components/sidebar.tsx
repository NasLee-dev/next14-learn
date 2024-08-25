import { createBrowserSupabaseClient } from "utils/supabase/client";

/* eslint-disable @next/next/no-img-element */
export default function Sidebar() {
  const supabase = createBrowserSupabaseClient();
  return (
    <aside className="h-screen p-6 border-r border-gray-300 flex flex-col justify-between">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="instagram"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-semibold">Instagram</h1>
        </div>
        <button className="p-2 rounded-full bg-gray-100">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-heart"></i>
              <span>Notifications</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-search"></i>
              <span>Search</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-message"></i>
              <span>Message</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}