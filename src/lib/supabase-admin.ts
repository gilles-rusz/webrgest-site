import { createClient, SupabaseClient } from "@supabase/supabase-js";

function getEnv(key: string): string {
  return process.env[key] || "";
}

let _supabaseAdmin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    const url =
      getEnv("SUPABASE_URL") || getEnv("NEXT_PUBLIC_SUPABASE_URL");
    const key =
      getEnv("SUPABASE_SERVICE_ROLE_KEY") ||
      getEnv("SUPABASE_SERVICE_KEY");

    if (!url || !key) {
      throw new Error(
        `Supabase admin env vars missing. SUPABASE_URL=${url ? "set" : "MISSING"}, SUPABASE_SERVICE_ROLE_KEY=${key ? "set" : "MISSING"}`
      );
    }
    const cleanUrl = url
      .trim()
      .replace(/\/rest\/v1\/?$/, "")
      .replace(/\/+$/, "");
    _supabaseAdmin = createClient(cleanUrl, key.trim());
  }
  return _supabaseAdmin;
}
