// app/api/movie-detail/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "utils/supabase/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID parameter is required" }, { status: 400 });
  }

  const supabase = await createServerSupabaseClient();

  try {
    const { data, error } = await supabase.from("movie").select("*").eq("id", id).maybeSingle();
    
    if (error) {
      console.error("Database error:", error); // 오류 로깅
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error); // 예외 로깅
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
