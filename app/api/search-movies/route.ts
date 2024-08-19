'use server';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from 'utils/supabase/server';

export async function GET(req: NextRequest) {
  const searchKeyword = req.nextUrl.searchParams.get('search') || "";
  const page = parseInt(req.nextUrl.searchParams.get('page')) || 1; 
  const pageSize = parseInt(req.nextUrl.searchParams.get('pageSize')) || 12; 
  const supabase = await createServerSupabaseClient();

  try {
    const { count } = await supabase
      .from('movie')
      .select('*', { count: 'exact' })
      .ilike('title', `%${searchKeyword}%`);

    const { data, error } = await supabase
      .from('movie')
      .select('*')
      .ilike('title', `%${searchKeyword}%`)
      .range((page - 1) * pageSize, page * pageSize - 1);

    const hasNextPage = count > page * pageSize;

    if (error) {
      console.error('Error fetching movies:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({
      data,
      page,
      pageSize,
      hasNextPage
    }, { status: 200 });
  } catch (error) {
    console.error('Catch error:', error); // Optionally log caught errors
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
