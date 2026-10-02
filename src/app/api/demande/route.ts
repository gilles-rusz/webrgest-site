import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const DEFAULT_FROM = "Web RG Est <onboarding@resend.dev>";

const FIELDS = [
  "type",
  "name",
  "email",
  "phone",
  "subject",
  "sector",
  "budget",
  "delai",
  "message",
  "utm_source",
  "utm_medium",
  "utm_campaign",
] as const;

type Field = (typeof FIELDS)[number];
type Demande = Record<Field, string>;

const LABELS: Record<Field, string> = {
  type: "Formulaire",
  name: "Nom",
  email: "Email",
  phone: "Téléphone",
  subject: "Projet",
  sector: "Secteur",
  budget: "Budget",
  delai: "Délai",
  message: "Message",
  utm_source: "utm_source",
  utm_medium: "utm_medium",
  utm_campaign: "utm_campaign",
};

function clean(value: unknown, max = 5000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean; score?: number };
    return data.success === true && (data.score ?? 1) >= 0.3;
  } catch {
    return true;
  }
}

async function saveDemande(demande: Demande): Promise<boolean> {
  try {
    const { error } = await getSupabaseAdmin().from("demandes").insert({
      type: demande.type,
      name: demande.name,
      email: demande.email,
      phone: demande.phone || null,
      subject: demande.subject || null,
      sector: demande.sector || null,
      budget: demande.budget || null,
      delai: demande.delai || null,
      message: demande.message,
      utm_source: demande.utm_source || null,
      utm_medium: demande.utm_medium || null,
      utm_campaign: demande.utm_campaign || null,
    });
    if (error) console.error("[demande] Supabase:", error.message);
    return !error;
  } catch (err) {
    console.error("[demande] Supabase:", err);
    return false;
  }
}

async function sendEmail(demande: Demande): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMANDE_EMAIL_TO;
  if (!apiKey || !to) {
    console.error("[demande] RESEND_API_KEY ou DEMANDE_EMAIL_TO manquant");
    return false;
  }

  const prefix = demande.type === "devis" ? "[Devis]" : "[Contact]";
  const subject = [prefix, demande.name, demande.subject, demande.sector]
    .filter(Boolean)
    .join(" - ");

  const rows = FIELDS.filter((f) => demande[f])
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${LABELS[f]}</td>` +
        `<td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(demande[f])}</td></tr>`
    )
    .join("");
  const text = FIELDS.filter((f) => demande[f])
    .map((f) => `${LABELS[f]} : ${demande[f]}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.DEMANDE_EMAIL_FROM || DEFAULT_FROM,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: demande.email,
        subject,
        html: `<table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
        text,
      }),
    });
    if (!res.ok) console.error("[demande] Resend:", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[demande] Resend:", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (clean(body._gotcha)) {
    return NextResponse.json({ success: true });
  }

  const demande = Object.fromEntries(
    FIELDS.map((f) => [f, clean(body[f])])
  ) as Demande;
  demande.type = demande.type === "devis" ? "devis" : "contact";

  if (!demande.name || !demande.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(demande.email)) {
    return NextResponse.json(
      { error: "Nom, email valide et message sont requis." },
      { status: 400 }
    );
  }

  if (!(await verifyRecaptcha(clean(body.recaptchaToken)))) {
    return NextResponse.json({ error: "Vérification anti-robot échouée." }, { status: 400 });
  }

  const [saved, emailed] = await Promise.all([saveDemande(demande), sendEmail(demande)]);

  if (!saved && !emailed) {
    return NextResponse.json(
      { error: "Impossible d'envoyer la demande pour le moment." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
