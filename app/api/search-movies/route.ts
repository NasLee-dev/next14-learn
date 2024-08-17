'use sever';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from 'utils/supabase/server';

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get('search') || "";

  const supabase = await createServerSupabaseClient();

  try {
    const { data, error } = await supabase.from('movie').select('*').ilike('title', `%${search}%`);

    if (error) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
