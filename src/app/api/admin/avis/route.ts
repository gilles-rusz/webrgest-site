import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const token = authHeader.replace("Bearer ", "");
  return token === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("avis")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const { id, approved } = body;

  if (!id || typeof approved !== "boolean") {
    return NextResponse.json(
      { error: "id et approved sont requis." },
      { status: 400 }
    );
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { error } = await supabaseAdmin
      .from("avis")
      .update({ approved })
      .eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "id est requis." }, { status: 400 });
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { error } = await supabaseAdmin.from("avis").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}
