"use server";

import { createServerSupabaseAdminClient } from "utils/supabase/server";

export async function getAllUsers() {
  const supabase = await createServerSupabaseAdminClient(); //  모든 유저 접근 가능
  const { data, error } = await supabase.auth.admin.listUsers();
  if (error) {
    throw error;
  }
  return data.users as any[];
}
