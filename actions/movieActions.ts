'use sever';

import { createServerSupabaseClient } from "utils/supabase/server"

export async function searchMovies({ search = "" }) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("movie").select("*").ilike("title", `%${search}%`);
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}

export async function getMovieById({ id }) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("movie").select("*").eq("id", id).maybeSingle();
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}
