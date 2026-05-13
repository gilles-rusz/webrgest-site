import { NextResponse } from "next/server";

export async function GET() {
  const vars = [
    "SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_SERVICE_KEY",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "ADMIN_SECRET",
  ];

  const status: Record<string, string> = {};
  for (const v of vars) {
    const val = process.env[v];
    if (!val) {
      status[v] = "NOT SET";
    } else {
      status[v] = `SET (${val.length} chars, starts: ${val.substring(0, 12)}...)`;
    }
  }

  return NextResponse.json(status);
}
