import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const FORMSPREE_FORM_ID = "xdayjojp";

interface AvisPayload {
  name: string;
  company?: string;
  rating: number;
  message: string;
}

async function sendAvisFallback({ name, company, rating, message }: AvisPayload) {
  const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      company: company || "Non renseigné",
      rating,
      message,
      subject: "Nouvel avis client à valider",
      _subject: `[Web RG Est] Nouvel avis client : ${rating}/5`,
    }),
  });

  return response.ok;
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("avis")
      .select("id, name, company, rating, message, created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const rating = Number(body.rating);
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !rating || !message) {
    return NextResponse.json(
      { error: "Nom, note et message sont requis." },
      { status: 400 }
    );
  }

  if (rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "La note doit être entre 1 et 5." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Le message doit contenir au moins 10 caractères." },
      { status: 400 }
    );
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { error } = await supabaseAdmin.from("avis").insert({
      name,
      company: company || null,
      rating,
      message,
      approved: false,
    });

    if (!error) {
      return NextResponse.json({ success: true, mode: "supabase" });
    }
  } catch {
    // Si Supabase n'est pas encore configuré, on tente quand même d'envoyer l'avis par email via Formspree.
  }

  const fallbackSent = await sendAvisFallback({ name, company, rating, message });

  if (fallbackSent) {
    return NextResponse.json({ success: true, mode: "email-fallback" });
  }

  return NextResponse.json(
    { error: "Impossible d'enregistrer l'avis pour le moment." },
    { status: 500 }
  );
}
